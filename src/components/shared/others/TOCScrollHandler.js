"use client";
import { useEffect } from "react";

/**
 * TOC Scroll Handler for GSAP ScrollSmoother
 * Fixes scroll issues after clicking TOC links by properly using ScrollSmoother API
 */
export default function TOCScrollHandler() {
    useEffect(() => {
        // Small delay to ensure ScrollSmoother is initialized
        const initTimer = setTimeout(() => {

            const handleHashChange = () => {
                const hash = window.location.hash;
                if (!hash) return;

                const targetElement = document.querySelector(hash);
                if (!targetElement) return;

                scrollToElement(targetElement, hash);
            };

            const scrollToElement = (element, hash) => {
                // Check if GSAP ScrollSmoother is available
                if (window.ScrollSmoother && window.ScrollSmoother.get) {
                    const smoother = window.ScrollSmoother.get();

                    if (smoother) {
                        // Use ScrollSmoother's native scrollTo for smooth scrolling
                        // The offset is handled by CSS scroll-margin-top on headings
                        smoother.scrollTo(element, true);

                        // Update URL
                        if (hash) {
                            window.history.replaceState(null, "", hash);
                        }

                        // Refresh ScrollSmoother to recalculate heights
                        setTimeout(() => {
                            smoother.refresh();
                        }, 100);

                        return;
                    }
                }

                // Fallback to regular scroll if ScrollSmoother not available
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            };

            // Handle TOC link clicks 
            const handleTOCClick = (e) => {
                const link = e.target.closest('a[href^="#"]');
                if (!link) return;

                const href = link.getAttribute("href");
                if (!href || href === "#") return;

                e.preventDefault();
                e.stopPropagation();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    scrollToElement(targetElement, href);
                }
            };

            // Attach click handler to TOC
            const toc = document.querySelector(".blog-toc-wrapper");
            if (toc) {
                toc.addEventListener("click", handleTOCClick, { capture: true });
            }

            // Listen for hash changes (browser back/forward)
            window.addEventListener("hashchange", handleHashChange);

            // Handle initial hash on page load
            if (window.location.hash) {
                setTimeout(handleHashChange, 800);
            }

            // Cleanup
            return () => {
                if (toc) {
                    toc.removeEventListener("click", handleTOCClick, { capture: true });
                }
                window.removeEventListener("hashchange", handleHashChange);
            };
        }, 300);

        return () => clearTimeout(initTimer);
    }, []);

    return null;
}
