import getALlServices from "@/libs/getALlServices";
import FullScreenHero from "@/components/sections/hero/FullScreenHero";
import MethodologySection from "@/components/sections/services/cyber/MethodologySection";
import ApproachSection from "@/components/sections/services/cyber/ApproachSection";
import ProductUseCaseSection from "@/components/sections/products/ProductUseCaseSection";
import WhyUsSection from "@/components/sections/services/WhyUsSection";
import Faq2 from "@/components/sections/faq/Faq2";
import Blogs2 from "@/components/sections/blogs/Blogs2";

const CyberSecurityServiceTemplate = ({ serviceSlug }) => {
    const services = getALlServices();
    const currentItem = services.find((service) => service.id === serviceSlug);

    const { title, category, categoryId, img, img4, desc, methodology, approach } = currentItem || {};

    const breadcrums = [
        { name: "Services", path: "/services" },
    ];

    if (category && categoryId) {
        breadcrums.push({ name: category, path: `/services/${categoryId}` });
    }

    const mappedFaqs = currentItem?.faqs?.map(faq => ({
        title: faq.question,
        desc: faq.answer
    }));

    return (
        <div className="cyber-security-wrapper">
            <FullScreenHero
                title={title ? title : "Service Details"}
                text={desc ? desc : (title ? title : "Service Details")}
                breadcrums={breadcrums}
                image={img4 || img}
            />

            {/* Industry Overview Section */}
            <section className="cyber-security-overview section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="overview-content">
                                <h3 className="section-title text-primary mb-4">{currentItem?.catchyTitle || 'Overview'}</h3>
                                <div className="overview-text">
                                    {currentItem?.overview && currentItem.overview.split('\n').map((paragraph, index) => (
                                        paragraph.trim() && <p key={index} className="mb-4 text-lg">{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Methodology Section */}
            {methodology && <MethodologySection methodology={methodology} />}

            {/* Approaches Section */}
            {approach && <ApproachSection approach={approach} />}

            {/* Key Benefits Section (Product Style - Gradient Cards) */}
            {currentItem?.keyBenefits && (
                <ProductUseCaseSection
                    title="Key Benefits of the Services"
                    items={currentItem.keyBenefits}
                />
            )}

            {/* Why Us Section */}
            <WhyUsSection items={currentItem?.whyUsItems} />

            {/* Related Blogs Section */}
            <Blogs2
                categoryName="cyber-security"
                title="Related Insights & Cyber Security News"
                description="Explore our latest analysis on emerging threats, compliance standards, and defensive strategies for modern enterprises."
            />

            {/* FAQ Section */}
            {mappedFaqs && (
                <Faq2
                    data={mappedFaqs}
                    type={2}
                    title="Frequently Asked Questions"
                    rightTitle="Common Questions"
                />
            )}

        </div>
    );
};

export default CyberSecurityServiceTemplate;
