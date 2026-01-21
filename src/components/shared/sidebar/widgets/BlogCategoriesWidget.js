"use client";
import { getAllBlogs } from "@/libs/wpBlogs";
import makePath from "@/libs/makePath";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import { useEffect, useState } from "react";

const BlogCategoriesWidget = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const blogs = await getAllBlogs();
				const categoryMap = {};
				blogs.forEach((blog) => {
					const cat = blog.category;
					categoryMap[cat] = (categoryMap[cat] || 0) + 1;
				});
				setCategories(Object.entries(categoryMap));
			} catch (error) {
				console.error("Error fetching categories:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchCategories();
	}, []);

	if (loading) return <div>Loading...</div>;

	return (
		<div className="tj-sidebar-widget widget-categories">
			<h4 className="widget-title">Categories</h4>
			<ul>
				{categories?.length
					? categories?.map(([category, count], idx) => (
						<li key={idx}>
							<Link href={`/blogs?category=${makePath(category)}`}>
								{category}{" "}
								<span className="number">({modifyNumber(count)})</span>
							</Link>{" "}
						</li>
					))
					: ""}
			</ul>
		</div>
	);
};

export default BlogCategoriesWidget;

