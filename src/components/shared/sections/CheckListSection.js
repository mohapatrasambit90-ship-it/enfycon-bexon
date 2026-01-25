"use client";

import React from "react";

const CheckListSection = ({
    title,
    items,
    sectionClass,
    listClass = "industry-edge-list",
}) => {
    if (!items || items.length === 0) return null;

    return (
        <div className={`${sectionClass} wow fadeInUp`} data-wow-delay=".3s">
            <div className="container">
                {title && <h3 className="section-title text-primary mb-4 text-3xl">{title}</h3>}
                <ul className={listClass}>
                    {items.map((item, idx) => (
                        <li key={idx} className="text-xl">
                            <i className="tji-check"></i>
                            <span className="ms-2">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CheckListSection;
