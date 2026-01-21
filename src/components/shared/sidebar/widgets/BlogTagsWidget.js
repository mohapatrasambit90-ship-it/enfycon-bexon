"use client";
import { getAllBlogs } from "@/libs/wpBlogs";
import makePath from "@/libs/makePath";
import Link from "next/link";
import { useEffect, useState } from "react";

const BlogTagsWidget = () => {
	const [tags, setTags] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchTags = async () => {
			try {
				const blogs = await getAllBlogs();
				const tagsSet = new Set();
				// Note: In our current mapping, we don't return all tags per blog yet.
				// For now, let's use the category as a tag or update wpBlogs.js to return tags.
				// Let's assume we want categories as tags for now if tags aren't mapped.
				blogs.forEach((blog) => {
					if (blog.category) tagsSet.add(blog.category);
				});
				setTags(Array.from(tagsSet));
			} catch (error) {
				console.error("Error fetching tags:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchTags();
	}, []);

	if (loading) return <div>Loading...</div>;

	return (
		<div className="tj-sidebar-widget widget-tag-cloud">
			<h4 className="widget-title">Tags</h4>
			<nav>
				<div className="tagcloud">
					{tags?.length
						? tags?.map((tag, idx) => (
							<Link key={idx} href={`/blogs?tag=${makePath(tag)}`}>
								{" "}
								{tag}
							</Link>
						))
						: ""}
				</div>
			</nav>
		</div>
	);
};

export default BlogTagsWidget;

