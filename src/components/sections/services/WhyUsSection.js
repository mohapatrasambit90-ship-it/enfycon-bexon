"use client";

import React from "react";

const WhyUsSection = ({ items: propItems }) => {
    const defaultItems = [
        {
            title: "Experienced Team",
            desc: "Our team brings unparalleled global experience in aiding governments and businesses to defend against cybercrime and mitigate risks.",
            icon: "fa-light fa-users-medical" // Approximation
        },
        {
            title: "Practical Guidance",
            desc: "enfycon provides hands-on IT experts with extensive knowledge and real-world experience to help your business navigate complex challenges.",
            icon: "fa-light fa-clipboard-list-check"
        },
        {
            title: "Reasonable Pricing",
            desc: "We offer simple, straightforward pricing with no hidden agendas, miscellaneous charges, or add-on fees. You only pay for what you need.",
            icon: "fa-light fa-badge-dollar"
        },
        {
            title: "Personalized Customer Service",
            desc: "Our personable, dedicated staff is always available to answer your questions and address any concerns you may have promptly.",
            icon: "fa-light fa-headset"
        },
        {
            title: "Proven Track Records",
            desc: "enfycon has an exceptional reputation and a proven track record of delivering successful projects and ensuring client satisfaction.",
            icon: "fa-light fa-file-certificate" // or fa-award
        },
        {
            title: "Adopting to Your Needs",
            desc: "We customize our approach to suit your specific requirements and future goals, ensuring our solutions align perfectly with your business.",
            icon: "fa-light fa-hand-holding-heart" // check if valid, or fa-hands-heart
        }
    ];

    const items = propItems || defaultItems;

    const renderTitle = (title) => {
        const words = title.split(" ");
        return (
            <>
                {words.map((word, index) => (
                    <span key={index} className={index === 1 ? "highlight" : ""}>
                        {word}{index < words.length - 1 ? " " : ""}
                    </span>
                ))}
            </>
        );
    };

    return (
        <section className="tj-why-us-section section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading">
                            <h2 className="sec-title">Why us</h2>
                        </div>
                    </div>
                </div>
                <div className="why-us-grid">
                    {items.map((item, idx) => (
                        <div key={idx} className="why-us-item wow fadeInUp" data-wow-delay={`${0.1 * (idx + 1)}s`}>
                            <div className="icon">
                                <i className={item.icon}></i>
                            </div>
                            <h3 className="title">
                                {renderTitle(item.title)}
                            </h3>
                            <p className="desc">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
