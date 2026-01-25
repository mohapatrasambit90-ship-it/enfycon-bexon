"use client";

import React from "react";

const IconFeatureGrid = ({
    title,
    items,
    sectionClass,
    gridClass = "industry-benefits-grid",
    cardClass = "industry-benefit-card",
}) => {
    if (!items || items.length === 0) return null;

    return (
        <div className={`${sectionClass} wow fadeInUp`} data-wow-delay=".3s">
            <div className="container">
                {title && <h3 className="section-title text-primary mb-4 text-3xl">{title}</h3>}
                <div className={gridClass}>
                    {items.map((item, idx) => (
                        <div className={cardClass} key={idx}>
                            <div className="icon">
                                <i className={item.icon}></i>
                            </div>
                            <div className="content">
                                <h5 className="title text-xl font-bold">{item.title}</h5>
                                <p className="text-lg">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IconFeatureGrid;
