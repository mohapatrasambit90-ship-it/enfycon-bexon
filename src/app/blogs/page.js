import BlogHeroEnterprise from "@/components/sections/blogs/BlogHeroEnterprise";
import LatestBlogHero from "@/components/sections/blogs/LatestBlogHero";
import { mapPostToCard } from "@/libs/mappers";
import { getBlogPageData, getCategoryCounts, getAllAuthors } from "@/libs/wpBlogs";
import BlogFilter from "@/components/sections/blogs/BlogFilter"; // Consumed by wrapper, but can stay or go depending on tree shaking. Actually wrapper imports it.
import BlogContentWrapper from "@/components/sections/blogs/BlogContentWrapper";

export const metadata = {
	title: "Latest Technology & Industry Insights | enfycon Blogs",
	description: "Explore our latest insights and news",
};

export const dynamic = 'force-dynamic';

export default async function BlogPage(props) {


	const searchParams = await props.searchParams;
	const category = searchParams?.category || null;
	const author = searchParams?.author || null;

	const [data, categories, authors] = await Promise.all([
		getBlogPageData(category, author),
		getCategoryCounts(),
		getAllAuthors(),
	]);

	const latestPost = data?.latestPost;
	const postsData = data?.posts;

	if (!postsData) {
		return (
			<div className="container mt-5 pt-5 text-center">
				<h3>Unable to load blogs</h3>
				<p>We are experiencing some technical difficulties. Please check back later.</p>
				<a href="/blogs" className="btn btn-primary mt-3">Refresh Page</a>
			</div>
		);
	}

	const { nodes, pageInfo } = postsData;

	// Map initial posts to the format expected by BlogCard1
	const initialPosts = nodes.map((node) => mapPostToCard(node, category));

	// Determine Hero Title and Display Name
	let heroTitle = "All Posts";
	if (category) {
		// Try to find matching category name from the first post
		const firstPost = nodes?.[0];
		const matchedCat = firstPost?.categories?.nodes?.find((c) => c.slug === category);
		if (matchedCat) {
			heroTitle = matchedCat.name;
		} else {
			// Fallback: Title Case the slug
			heroTitle = category
				.split("-")
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ");
		}
	}

	// Determine Breadcrumbs
	// Component already renders "Home > Blogs", so we just append the current section
	const breadcrumbs = (
		<>
			<span className="mx-2">&gt;</span>
			<span style={{ color: "#4facfe" }}>{heroTitle}</span>
		</>
	);

	return (
		<>
			<BlogHeroEnterprise
				customTitle={heroTitle}
				breadcrumbOverride={breadcrumbs}
			/>
			<LatestBlogHero post={latestPost} />

			<section className="tj-blog-section section-gap pt-4">
				<div className="container">
					<BlogContentWrapper
						categories={categories}
						authors={authors}
						initialCategory={category}
						initialAuthor={author}
						initialPosts={initialPosts}
						initialPageInfo={pageInfo}
					/>
				</div>
			</section>
		</>
	);
}
