export const mapPostToCard = (node) => {
    const date = new Date(node.date);
    return {
        id: node.slug,
        featuredImage: node.featuredImage?.node?.sourceUrl || null,
        title: node.title || "",
        desc: node.excerpt || "",
        author: node.author?.node?.name || "enfycon",
        day: date.getDate(),
        month: date.toLocaleString("en-US", { month: "short" }),
        year: date.getFullYear(),
        category: node.categories?.nodes[0]?.name || "Technology",
    };
};
