export function constructMetadata({
    title = "enfycon - empowering business with technology",
    description = "enfycon - empowering business with technology",
    image = "/images/og-image.png", // Make sure to add a default OG image to your public folder
    icons = "/favicon.ico",
    noIndex = false,
    canonicalUrl,
} = {}) {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@enfycon",
        },
        icons,
        metadataBase: new URL("https://enfycon.com"),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
        ...(canonicalUrl && {
            alternates: {
                canonical: canonicalUrl,
            }
        })
    };
}

export async function generateDynamicMetadata({
    params,
    items,
    resourceName = "Item",
    idParser = (id) => id,
    titleField = "title",
    descField = "desc",
    imageField = "image"
}) {
    const { id } = await params;
    const parsedId = idParser(id);
    const item = items?.find(({ id: itemId }) => itemId === parsedId);

    if (!item) {
        return constructMetadata({
            title: `${resourceName} Not Found - enfycon`,
            description: `The requested ${resourceName.toLowerCase()} could not be found.`,
            noIndex: true,
        });
    }

    return constructMetadata({
        title: `${item[titleField]} - enfycon`,
        description: item[descField] || `${resourceName} details for ${item[titleField]}`,
        image: item[imageField] || item.img, // Fallback for inconsistent naming
    });
}
