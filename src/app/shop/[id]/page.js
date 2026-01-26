import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import ProductDetailsMain from "@/components/layout/main/ProductDetailsMain";
import Cta from "@/components/sections/cta/Cta";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import CartContextProvider from "@/context_api/CartContext";
import WishlistContextProvider from "@/context_api/WshlistContext";
import getProducts from "@/libs/getProducts";
import { notFound } from "next/navigation";
const items = getProducts();
import { constructMetadata, generateDynamicMetadata } from "@/libs/seo";
import Footer2 from "@/components/layout/footer/Footer2";

export async function generateMetadata({ params }) {
	return generateDynamicMetadata({
		params,
		items,
		resourceName: "Product",
		idParser: (id) => parseInt(id),
		keywordContext: (item) => {
			const tags = item.tags?.join(" ") || "";
			return `${item.title} ${item.brand || ""} ${item.category || ""} ${item.productType || ""} ${tags}`;
		}
	});
}
export default async function ProductDetails({ params }) {
	const { id } = await params;
	const isExistItem = items?.find(({ id: id1 }) => id1 === parseInt(id));
	if (!isExistItem) {
		notFound();
	}
	return (
		<div className="ecommerce">
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<CartContextProvider>
							<WishlistContextProvider>
								<ProductDetailsMain currentItemId={parseInt(id)} />
							</WishlistContextProvider>
						</CartContextProvider>
						
					</main>
					<Footer2/>
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}

export async function generateStaticParams() {
	return items?.map(({ id }) => ({ id: id.toString() }));
}
