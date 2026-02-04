"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/siteConfig';
import useDebounce from '@/hooks/useDebounce';
import { SEARCH_POSTS_QUERY } from './searchQuery';
import getNavItems from '@/libs/getNavItems';
import { serviceCategories } from '@/data/servicesData';
import { industriesData } from '@/data/industriesData';
import './search.scss';

const Search = ({ active, resultsPlacement = "dropdown" }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [floatingStyle, setFloatingStyle] = useState(null);
    
    // Pagination state
    const [pageInfo, setPageInfo] = useState({ hasNextPage: false, endCursor: null });
    const [isFetchingMore, setIsFetchingMore] = useState(false);

    // Debounce the input term
    const debouncedTerm = useDebounce(searchTerm, 500);

    // Cache for storing results: { "term": { posts: [], pageInfo: {} } }
    const cache = useRef(new Map());

    // AbortController to cancel outdated requests
    const abortController = useRef(null);
    const wrapperRef = useRef(null);
    const inputRef = useRef(null);

    // API URL
    const API_URL = `${siteConfig.blogApiUrl}/graphql`;

    // Flatten navigation items for search
    const [localPages, setLocalPages] = useState([]);
    useEffect(() => {
        const navItems = getNavItems();
        const seenPaths = new Set();

        // Build image map from static data for better image resolution
        const imageMap = new Map();

        // Services
        serviceCategories.forEach(cat => {
            if (cat.img4) imageMap.set(`/services/${cat.id}`, cat.img4);
            if (cat.services) {
                cat.services.forEach(svc => {
                    const svcPath = `/services/${cat.id}/${svc.id}`;
                    if (svc.img4 || svc.img) imageMap.set(svcPath, svc.img4 || svc.img);
                });
            }
        });

        // Industries
        industriesData.forEach(ind => {
            // Assuming industry paths follow /industries/:id pattern
            if (ind.image) imageMap.set(`/industries/${ind.id}`, ind.image);
        });

        const flattenItems = (items) => {
            let flat = [];
            items.forEach(item => {
                if (item.path && item.path !== '#' && item.name && !seenPaths.has(item.path)) {
                    seenPaths.add(item.path);

                    // Resolve image: nav-item img > data-file img > default (handled in render)
                    let resolvedImg = item.img;
                    if (!resolvedImg && imageMap.has(item.path)) {
                        resolvedImg = imageMap.get(item.path);
                    }

                    flat.push({
                        id: `local-${item.path}`, // Use path for unique ID
                        title: item.name,
                        slug: item.path,
                        type: 'page',
                        isLocal: true,
                        img: resolvedImg
                    });
                }
                if (item.submenu) {
                    flat = [...flat, ...flattenItems(item.submenu)];
                }
                if (item.items) {
                    flat = [...flat, ...flattenItems(item.items)];
                }
            });
            return flat;
        };
        setLocalPages(flattenItems(navItems));
    }, []);

    // Focus input when active becomes true
    useEffect(() => {
        if (active && inputRef.current) {
            // Small timeout to allow transition/animation to start
            setTimeout(() => {
                inputRef.current.focus();
            }, 100);
        }
    }, [active]);

    // For offcanvas usage, hide results when the panel closes
    useEffect(() => {
        if (resultsPlacement === "offcanvas-left" && !active) {
            setIsOpen(false);
        }
    }, [active, resultsPlacement]);

    // Handle input change
    const handleChange = (e) => {
        const val = e.target.value;
        setSearchTerm(val);
        if (val.length < 3) {
            setResults([]);
            setIsOpen(false);
            setPageInfo({ hasNextPage: false, endCursor: null });
        }
    };

    // Main fetch function
    const performSearch = useCallback(async (term, cursor = null) => {
        if (!term || term.length < 3) return;

        // If loading more, set specific loading state
        if (cursor) {
            setIsFetchingMore(true);
        } else {
            setLoading(true);
            setError(false);
            setIsOpen(true);
            
            // Show local results immediately for new searches
            const localResults = localPages.filter(page =>
                page.title.toLowerCase().includes(term.toLowerCase())
            );
            setResults(localResults);
        }

        // Abort previous request only if it's a NEW search, not pagination
        if (!cursor && abortController.current) {
            abortController.current.abort();
        }

        if (!cursor) {
            abortController.current = new AbortController();
        }

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: SEARCH_POSTS_QUERY,
                    variables: { term: term, after: cursor }
                }),
                signal: !cursor ? abortController.current?.signal : null // Don't cancel pagination requests with the main controller easily
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const json = await response.json();
            const newPosts = json.data?.posts?.nodes || [];
            const newPageInfo = json.data?.posts?.pageInfo || { hasNextPage: false, endCursor: null };

            if (cursor) {
                // Determine new results by appending
                setResults(prev => {
                    const existingIds = new Set(prev.map(p => p.id));
                    const uniquePosts = newPosts.filter(p => !existingIds.has(p.id));
                    return [...prev, ...uniquePosts];
                });
                setPageInfo(newPageInfo);
            } else {
                // Initial search result
                const currentLocal = localPages.filter(page =>
                    page.title.toLowerCase().includes(term.toLowerCase())
                );
                
                const finalResults = [...currentLocal, ...newPosts];
                setResults(finalResults);
                setPageInfo(newPageInfo);
                
                // Update cache
                cache.current.set(term, { posts: newPosts, pageInfo: newPageInfo });
            }

        } catch (err) {
            if (err.name === 'AbortError') return;
            console.error("Search error:", err);
            if (!cursor) setError(true);
        } finally {
            setLoading(false);
            setIsFetchingMore(false);
        }
    }, [API_URL, localPages]);

    // Effect to trigger search on debounce
    useEffect(() => {
        if (debouncedTerm.length < 3) return;

        // Check cache first
        if (cache.current.has(debouncedTerm)) {
            const cached = cache.current.get(debouncedTerm);
            const localResults = localPages.filter(page =>
                page.title.toLowerCase().includes(debouncedTerm.toLowerCase())
            );
            setResults([...localResults, ...cached.posts]);
            setPageInfo(cached.pageInfo);
            setIsOpen(true);
            setLoading(false);
            return;
        }

        // Perform fresh search
        performSearch(debouncedTerm, null);

    }, [debouncedTerm, localPages, performSearch]);

    // Handle Scroll for Pagination
    const handleScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.target;
        if (scrollHeight - scrollTop <= clientHeight + 50) { // 50px threshold
            if (pageInfo.hasNextPage && !isFetchingMore && !loading) {
                performSearch(debouncedTerm, pageInfo.endCursor);
            }
        }
    };

    // Close dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    // Allow re-opening if input is focused and has value
    const handleFocus = () => {
        if (searchTerm.length >= 3) {
            setIsOpen(true);
        }
    };

    const updateFloatingStyle = useCallback(() => {
        if (resultsPlacement !== "offcanvas-left") return;
        if (!inputRef.current) return;

        const rect = inputRef.current.getBoundingClientRect();
        const header = document.querySelector(".header-area");
        const offcanvas = document.querySelector(".tj-offcanvas-area.opened");
        const gap = 20;
        const leftGutter = 30;
        let rightGutter = 30;

        if (offcanvas) {
            const panelRect = offcanvas.getBoundingClientRect();
            rightGutter = Math.max(
                20,
                window.innerWidth - panelRect.left + gap
            );
        }

        let top = 20;
        if (header) {
            const headerRect = header.getBoundingClientRect();
            if (headerRect.bottom > 0) {
                top = headerRect.bottom + 10;
            }
        }
        const maxHeight = Math.max(200, window.innerHeight - top - 30);

        setFloatingStyle({
            position: "fixed",
            top: `${top}px`,
            left: `${leftGutter}px`,
            right: `${rightGutter}px`,
            maxHeight: `${maxHeight}px`,
            width: "auto",
            marginTop: 0,
            zIndex: 10000
        });
    }, [resultsPlacement]);

    useEffect(() => {
        if (resultsPlacement !== "offcanvas-left") return;
        if (!isOpen) return;

        updateFloatingStyle();
        const handleResize = () => updateFloatingStyle();
        const offcanvas = document.querySelector(".tj-offcanvas-area.opened");
        const handleOffcanvasScroll = () => updateFloatingStyle();
        window.addEventListener("resize", handleResize);
        if (offcanvas) {
            offcanvas.addEventListener("scroll", handleOffcanvasScroll);
        }

        return () => {
            window.removeEventListener("resize", handleResize);
            if (offcanvas) {
                offcanvas.removeEventListener("scroll", handleOffcanvasScroll);
            }
        };
    }, [isOpen, resultsPlacement, updateFloatingStyle]);

    return (
        <div className="search-component" ref={wrapperRef}>
            <div className="search-input-wrapper">
                <input
                    ref={inputRef}
                    type="text"
                    className="form-control"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    aria-label="Search"
                />

                {loading && !isFetchingMore && (
                    <div className="search-spinner spinner-border spinner-border-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                )}
            </div>

            {isOpen && searchTerm.length >= 3 && (
                <div
                    className="search-results-dropdown"
                    onScroll={handleScroll}
                    style={resultsPlacement === "offcanvas-left" ? floatingStyle : undefined}
                >
                    {results.length > 0 ? (
                        <div className="list-group list-group-flush">
                            {results.map((post) => (
                                <Link
                                    key={post.id}
                                    href={post.isLocal ? post.slug : `/blogs/${post.slug || post.id}`}
                                    className="list-group-item list-group-item-action search-item-card d-flex flex-column flex-sm-row gap-3 align-items-center align-items-sm-start"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="card-img-wrapper">
                                        {post.isLocal ? (
                                            <img
                                                src={post.img || "/images/bg/service-banner.jpg"}
                                                alt="Page Banner"
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <>
                                                {post.featuredImage?.node?.sourceUrl && (
                                                    <img
                                                        src={post.featuredImage.node.sourceUrl}
                                                        alt={post.featuredImage.node.altText || post.title}
                                                    />
                                                )}
                                                {!post.featuredImage?.node?.sourceUrl && (
                                                    <img
                                                        src="/images/logos/enfycon.png"
                                                        alt="Enfycon Logo"
                                                        className="img-fluid p-2"
                                                        style={{ objectFit: "contain" }}
                                                    />
                                                )}
                                            </>
                                        )}
                                    </div>
                                    <div className="card-body p-0 text-center text-sm-start">
                                        <h6 className="card-title text-dark">
                                            {post.isLocal ? (
                                                <span className="badge bg-primary text-white me-2" style={{ fontWeight: 'normal' }}>Page</span>
                                            ) : (
                                                <span className="badge text-white me-2" style={{ fontWeight: 'normal', backgroundColor: '#FF6B00' }}>Blog</span>
                                            )}
                                            {post.title}
                                        </h6>
                                        {!post.isLocal && (
                                            <div
                                                className="card-text small text-muted"
                                                dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                            />
                                        )}
                                        {post.isLocal && (
                                            <p className="card-text small text-muted m-0">
                                                Go to {post.title}
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            ))}
                            {isFetchingMore && (
                                <div className="p-3 text-center text-muted small">
                                    <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                                    Loading more...
                                </div>
                            )}
                        </div>
                    ) : (
                        !loading && !error && (
                            <div className="no-results">
                                No results found for "{searchTerm}"
                            </div>
                        )
                    )}
                    {error && (
                        <div className="p-3 text-center text-danger small">
                            Something went wrong. Please try again.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Search;
