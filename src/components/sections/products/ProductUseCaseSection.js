
import React from "react";

const ProductUseCaseSection = ({ title = "Use Cases Across Industries", items }) => {
    return (
        <div className="product-use-cases-section bg-gray-1 py-5">
            <div className="container">
                <h3 className="section-title text-primary mb-4">{title}</h3>
                <div className="row g-4">
                    {items.map((useCase, idx) => (
                        <div key={idx} className="col-lg-6">
                            <div
                                className={`use-case-card h-100 wow fadeInUp variant-${(idx % 4) + 1}`}
                                data-wow-delay={`${0.1 * (idx + 1)}s`}
                            >
                                {/* Header */}
                                <div className="card-header">
                                    {/* Decorative circle */}
                                    <div className="decorative-circle"></div>

                                    <div className="header-content">
                                        <div className="icon-box">
                                            <i className={useCase.icon}></i>
                                        </div>
                                        <h4 className="card-title">
                                            {useCase.title}
                                        </h4>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="card-body">
                                    <ul>
                                        {useCase.items?.map((item, itemIdx) => (
                                            <li key={itemIdx}>
                                                <div className="check-icon">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductUseCaseSection;
