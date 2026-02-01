import BlogDetailsMain from "@/components/layout/main/BlogDetailsMain";
import { getAllBlogs, getBlogBySlug } from "@/libs/wpBlogs";
import { notFound } from "next/navigation";

export default async function BlogDetails({ params }) {
	const { id } = await params;
	const post = await getBlogBySlug(id);

	if (!post) {
		notFound();
	}

	return (
		<BlogDetailsMain post={post} />
	);
}

export async function generateStaticParams() {
	try {
		const items = await getAllBlogs();
		return items?.map(({ id }) => ({ id: id.toString() })) || [];
	} catch (error) {
		console.error("Error generating static params for blogs:", error);
		return [];
	}
}

