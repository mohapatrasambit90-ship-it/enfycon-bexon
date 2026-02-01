"use client";
import BlogsPrimary from "@/components/sections/blogs/BlogsPrimary";
import HeroInner from "@/components/sections/hero/HeroInner";
import makeText from "@/libs/makeText";
import { getAllBlogs } from "@/libs/wpBlogs";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useLoading } from "@/components/shared/others/LoadingProvider";
import BlogCardSkeleton from "@/components/shared/blogs/BlogCardSkeleton";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";

const BlogMain = () => {
	const [allItems, setAllItems] = useState([]);
	const { isLoading, setLoading } = useLoading();
	const category = useSearchParams()?.get("category");
	const tag = useSearchParams()?.get("tag");
	const author_role = useSearchParams()?.get("author_role");
	const search = useSearchParams()?.get("search");

	useEffect(() => {
		let fetchTimer;
		const fetchBlogs = async () => {
			setLoading(true);
			try {
				const blogs = await getAllBlogs();
				setAllItems(blogs);
			} catch (error) {
				console.error("Error fetching blogs:", error);
			} finally {
				// Prevent flickering by ensuring loader shows for at least 800ms
				fetchTimer = setTimeout(() => {
					setLoading(false);
				}, 800);
			}
		};
		fetchBlogs();

		return () => {
			if (fetchTimer) clearTimeout(fetchTimer);
			setLoading(false); // Reset on unmount
		};
	}, []);

	// Mapping and Filtering (Simplified for now, as we fetch all for static grid)
	// If filtering is needed, it should ideally be done in the WP GraphQL query or filtered here.
	const filteredItems = allItems.filter((item) => {
		if (category && item.category.toLowerCase() !== category.toLowerCase())
			return false;
		// Add more filters if needed
		return true;
	});

	return (
		<div>
			<HeroInner
				title={
					category
						? `Category: ${makeText(category, true)}`
						: tag
							? `Tag: ${makeText(tag, true)}`
							: author_role
								? author_role
								: search
									? makeText(search, true)
									: "Read Blog"
				}
				text={
					category
						? `${makeText(category, true)}`
						: tag
							? ` ${makeText(tag, true)}`
							: author_role
								? `${author_role}`
								: search
									? `${makeText(search, true)}`
									: "Blogs"
				}
				breadcrums={
					category || tag || author_role || search
						? [{ name: "Blogs", path: "/blogs" }]
						: []
				}
			/>
			{isLoading ? (
				<section className="tj-blog-section section-gap">
					<div className="container">
						<div className="row row-gap-5">
							<div className="col-lg-8">
								<div className="blog-post-wrapper">
									{[1, 2, 3].map((item) => (
										<BlogCardSkeleton key={item} />
									))}
								</div>
							</div>
							<div className="col-lg-4">
								<BlogSidebar />
							</div>
						</div>
					</div>
				</section>
			) : (
				<BlogsPrimary filteredItems={filteredItems} />
			)}
		</div>
	);
};

export default BlogMain;
