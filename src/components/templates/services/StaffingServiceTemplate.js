import React from "react";
import getALlServices from "@/libs/getALlServices";
import FullScreenHero from "@/components/sections/hero/FullScreenHero";
import ApproachSection from "@/components/sections/services/cyber/ApproachSection";
import ProductUseCaseSection from "@/components/sections/products/ProductUseCaseSection";
import WhyUsSection from "@/components/sections/services/WhyUsSection";
import Faq2 from "@/components/sections/faq/Faq2";
import Blogs2 from "@/components/sections/blogs/Blogs2";

const StaffingServiceTemplate = ({ serviceSlug }) => {
    const services = getALlServices();
    const currentItem = services.find((service) => service.id === serviceSlug);

    // Guard clause if service not found
    if (!currentItem) return <div>Service not found</div>;

    const {
        title,
        desc,
        img,
        img4,
        overview,
        catchyTitle,
        challenges,
        keyBenefits,
        whyUsItems,
        faqs,
        categoryId
    } = currentItem;

    const breadcrums = [
        { name: "Services", path: "/services" },
        { name: "IT Professional Staffing", path: "/services/it-professional-staffing" }
    ];

    // Data Transformations for Component Compatibility

    // 1. Challenges -> ApproachSection Items
    // ApproachSection expects: { title, desc, icon }
    const approachItems = challenges?.map((challenge, idx) => ({
        title: challenge.title,
        desc: challenge.desc,
        icon: challenge.icon || "fa-light fa-shield-exclamation" // Default icon if missing
    }));

    // 2. Key Benefits -> ProductUseCaseSection Items (Gradient Cards)
    // ProductUseCaseSection expects: { title, icon, items: [string, string] }
    // Data now includes 'icon' and 'items' (bullets) directly
    const productUseCaseItems = keyBenefits?.map((benefit, idx) => ({
        title: benefit.title,
        icon: benefit.icon || "fa-regular fa-star",
        items: benefit.items || [benefit.desc] // Fallback for safety
    }));

    // 3. Why Enfycon -> WhyUsSection Items
    // WhyUsSection expects: { title, desc, icon }
    // Data is now an array of objects which perfectly matches the prop requirement.
    // We already destructured `whyUsItems` from the service object.

    const mappedFaqs = faqs?.map(faq => ({
        title: faq.question,
        desc: faq.answer
    }));

    return (
        <div className="cyber-security-wrapper">
            <FullScreenHero
                title={title}
                text={desc}
                breadcrums={breadcrums}
                image={img4 || img}
            />

            {/* Overview Section (Matched to Cyber Security Layout) */}
            <section className="cyber-security-overview section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="overview-content">
                                <h3 className="section-title text-primary mb-4">{catchyTitle || 'Overview'}</h3>
                                <div className="overview-text">
                                    {overview && overview.split('\n').map((paragraph, index) => (
                                        paragraph.trim() && <p key={index} className="mb-4 text-lg">{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges Section (Using ApproachSection Layout) */}
            {approachItems && (
                <ApproachSection
                    approach={{
                        title: "Challenges We Solve",
                        desc: "Navigating the complexities of modern IT staffing requires overcoming significant hurdles.",
                        items: approachItems
                    }}
                />
            )}

            {/* Key Benefits Section (Using ProductUseCaseSection - Gradient Cards) */}
            {productUseCaseItems && (
                <ProductUseCaseSection
                    title="Key Benefits"
                    items={productUseCaseItems}
                />
            )}

            {/* Why Us Section */}
            {whyUsItems && <WhyUsSection items={whyUsItems} />}

          

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

export default StaffingServiceTemplate;
