// import { useState } from "react";
import Link from "next/link";
import IconFeatureGrid from "@/components/shared/sections/IconFeatureGrid";
import ProductUseCaseSection from "@/components/sections/products/ProductUseCaseSection";

const ProductDetailsPrimary = ({ option }) => {
    // const [isHovering, setIsHovering] = useState(false);

    const {
        currentItem,
        items,
        currentId,
        isPrevItem,
        isNextItem,
        prevId,
        nextId,
    } = option || {};
    const { title, desc, longDesc, tagline } = currentItem || {};

    return (
        <section className="tj-service-area" id="product-details">

            {/* Product Description - Containerized */}
            <div className="container section-gap-top mb-0">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="post-details-wrapper py-5">
                            {currentItem.overviewTitle && (
                                <h3 className="section-title text-primary mb-4 text-3xl">{currentItem.overviewTitle}</h3>
                            )}
                            <div className="blog-text">
                                <div className="service-section wow fadeInUp" data-wow-delay=".3s">
                                    {longDesc ? (
                                        longDesc.map((text, i) => (
                                            <p key={i} className="mb-4 text-lg">{text}</p>
                                        ))
                                    ) : (
                                        desc && <p className="mb-4 text-lg">{desc}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Benefits Section - Full Width (Gray Background) */}
            {currentItem.benefits && (
                <IconFeatureGrid
                    title="Key Benefits"
                    items={currentItem.benefits}
                    sectionClass="product-benefits-section  py-5"
                    cardClass="gradient-border-card"
                />
            )}

            {/* Transforms Section - How it Transforms Your Practice */}
            {currentItem.transforms && (
                <IconFeatureGrid
                    title="How It Transforms Your Practice"
                    items={currentItem.transforms}
                    sectionClass="product-transforms-section bg-gray-1  py-5"
                />
            )}

            {/* How It Works Section - Full Width (White Background) */}
            {currentItem.howItWorks && (
                <IconFeatureGrid
                    title="How It Works"
                    items={currentItem.howItWorks}
                    sectionClass="product-how-it-works-section   py-5"
                />
            )}

            {/* Use Cases Section - Gradient Cards */}
            <ProductUseCaseSection items={currentItem.useCases} />

            {/* CTA & Navigation - Containerized */}
            <div className="container section-gap-bottom mt-5">
                {currentItem.cta && (
                    <div className="industry-cta-box wow fadeInUp" data-wow-delay=".3s">
                        <h3 className="title text-primary">{currentItem.cta.title}</h3>
                        <p className="desc">{currentItem.cta.desc}</p>
                        <Link href={currentItem.cta.buttonLink} className="tj-btn-primary">
                            {currentItem.cta.buttonText} <i className="tji-arrow-right"></i>
                        </Link>
                    </div>
                )}

                <div
                    className="tj-post__navigation mb-0 wow fadeInUp mt-5"
                    data-wow-delay="0.3s"
                >
                    {/* Previous Product */}
                    <div
                        className="tj-nav__post previous"
                        style={{ visibility: isPrevItem ? "visible" : "hidden" }}
                    >
                        <div className="tj-nav-post__nav prev_post">
                            <Link href={isPrevItem ? `/products/${prevId}` : "#"}>
                                <span>
                                    <i className="tji-arrow-left"></i>
                                </span>
                                Previous
                            </Link>
                        </div>
                    </div>
                    <Link href={"/products"} className="tj-nav-post__grid">
                        <i className="tji-window"></i>
                    </Link>
                    {/* Next Product */}
                    <div
                        className="tj-nav__post next"
                        style={{ visibility: isNextItem ? "visible" : "hidden" }}
                    >
                        <div className="tj-nav-post__nav next_post">
                            <Link href={isNextItem ? `/products/${nextId}` : "#"}>
                                Next
                                <span>
                                    <i className="tji-arrow-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailsPrimary;
