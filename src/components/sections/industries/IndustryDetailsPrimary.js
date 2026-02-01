import Link from "next/link";
import IconFeatureGrid from "@/components/shared/sections/IconFeatureGrid";
import CheckListSection from "@/components/shared/sections/CheckListSection";
import IndustrySplitSection from "@/components/shared/sections/IndustrySplitSection";
import ImageFeatureGrid from "@/components/shared/sections/ImageFeatureGrid";

const IndustryDetailsPrimary = ({ option }) => {
    const {
        currentItem,
        items,
        currentId,
        isPrevItem,
        isNextItem,
        prevId,
        nextId,
    } = option || {};
    const { title, desc, longDesc, image } = currentItem || {};

    return (
        <section className="tj-service-area" id="industry-details">

            {/* Industry Description - Containerized */}
            <div className="container section-gap-top mb-0">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="post-details-wrapper py-5">
                            {currentItem.overviewTitle && (
                                <h3 className="section-title text-primary mb-4 text-3xl">{currentItem.overviewTitle}</h3>
                            )}
                            <div className="blog-text">
                                <div className="service-section wow fadeInUp " data-wow-delay=".3s">
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

            {/* Working Module (Split Section) - Full Width */}
            {currentItem.workingModule && (
                <IndustrySplitSection
                    item={currentItem.workingModule}
                    sectionClass="pb-5"
                />
            )}

            {/* Challenges Section - Full Width */}
            <IconFeatureGrid
                title={`Common Challenges in ${title}`}
                items={currentItem.challenges}
                sectionClass="industry-challenges-section bg-gray-1 py-5"
            />

            {/* Solutions/How We Help (Image Grid) - Moving Here (White) */}
            {currentItem.solutions && (
                <ImageFeatureGrid
                    title={`How We Help ${title} Operations`}
                    items={currentItem.solutions}
                    sectionClass="py-5"
                />
            )}

            {/* Key Benefits Section - Full Width (Gray) */}
            <IconFeatureGrid
                title={`Key Benefits of AI in ${title}`}
                items={currentItem.benefits}
                sectionClass="industry-benefits-section bg-gray-1 py-5"
            />

            {/* Use Cases Section - Full Width (White) */}
            <IconFeatureGrid
                title={`High-Impact AI Use Cases in ${title}`}
                items={currentItem.useCases}
                sectionClass="industry-use-cases-section py-5"
                gridClass="industry-use-cases-grid"
                cardClass="industry-use-case-card"
            />

            {/* Process Section - Full Width (Gray) */}
            <IconFeatureGrid
                title="Our Process To Success"
                items={currentItem.process}
                sectionClass="industry-process-section bg-gray-1 py-5"
            />

            {/* The Edge Section - Full Width (White) */}
            <CheckListSection
                title="The enfycon Edge"
                items={currentItem.edge}
                sectionClass="industry-edge-section py-5"
            />

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
                    {/* <!-- previous post --> */}
                    <div
                        className="tj-nav__post previous"
                        style={{ visibility: isPrevItem ? "visible" : "hidden" }}
                    >
                        <div className="tj-nav-post__nav prev_post">
                            <Link href={isPrevItem ? `/industries/${prevId}` : "#"}>
                                <span>
                                    <i className="tji-arrow-left"></i>
                                </span>
                                Previous
                            </Link>
                        </div>
                    </div>
                    <Link href={"/industries"} className="tj-nav-post__grid">
                        <i className="tji-window"></i>
                    </Link>
                    {/* <!-- next post --> */}
                    <div
                        className="tj-nav__post next"
                        style={{ visibility: isNextItem ? "visible" : "hidden" }}
                    >
                        <div className="tj-nav-post__nav next_post">
                            <Link href={isNextItem ? `/industries/${nextId}` : "#"}>
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

export default IndustryDetailsPrimary;
