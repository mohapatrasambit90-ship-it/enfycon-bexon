"use client";

import React from "react";

const ProductUseCaseSection = ({ title = "Use Cases Across Industries", items }) => {
    if (!items || items.length === 0) return null;

    const gradients = [
        'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', // Blue to Purple
        'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)', // Cyan to Blue
        'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)', // Green to Cyan
        'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)', // Amber to Red
    ];
    const borderColors = ['#8b5cf6', '#3b82f6', '#06b6d4', '#ef4444'];

    return (
        <div className="product-use-cases-section bg-gray-1 py-5">
            <div className="container">
                <h3 className="section-title text-primary mb-4">{title}</h3>
                <div className="row g-4">
                    {items.map((useCase, idx) => (
                        <div key={idx} className="col-lg-6">
                            <div
                                className="use-case-card h-100 wow fadeInUp"
                                data-wow-delay={`${0.1 * (idx + 1)}s`}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '16px',
                                    padding: '0',
                                    overflow: 'hidden',
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    border: `2px solid ${borderColors[idx % 4]}`,
                                    position: 'relative',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
                                }}
                            >
                                {/* Gradient Header */}
                                <div
                                    style={{
                                        background: gradients[idx % 4],
                                        padding: '25px 30px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                >
                                    {/* Decorative circle */}
                                    <div style={{
                                        position: 'absolute',
                                        top: '-20px',
                                        right: '-20px',
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        background: 'rgba(255,255,255,0.1)',
                                    }}></div>

                                    <div className="d-flex align-items-center">
                                        <div
                                            style={{
                                                width: '70px',
                                                height: '70px',
                                                borderRadius: '14px',
                                                background: 'rgba(255,255,255,0.25)',
                                                backdropFilter: 'blur(10px)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: 0,
                                                border: '2px solid rgba(255,255,255,0.3)',
                                                marginRight: '15px',
                                            }}
                                        >
                                            <i
                                                className={useCase.icon}
                                                style={{
                                                    fontSize: '32px',
                                                    color: '#fff',
                                                }}
                                            ></i>
                                        </div>
                                        <h4
                                            style={{
                                                fontSize: '24px',
                                                fontWeight: '700',
                                                color: '#fff',
                                                textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                                margin: 0,
                                            }}
                                        >
                                            {useCase.title}
                                        </h4>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div style={{ padding: '30px' }}>
                                    <ul
                                        style={{
                                            listStyle: 'none',
                                            margin: 0,
                                            padding: 0,
                                        }}
                                    >
                                        {useCase.items?.map((item, itemIdx) => (
                                            <li
                                                key={itemIdx}
                                                className="d-flex align-items-start mb-3"
                                                style={{
                                                    fontSize: '16px',
                                                    lineHeight: '1.7',
                                                    color: 'var(--tj-grey-1)',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: '24px',
                                                        height: '24px',
                                                        borderRadius: '50%',
                                                        background: gradients[idx % 4],
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        flexShrink: 0,
                                                        marginRight: '12px',
                                                        marginTop: '2px',
                                                    }}
                                                >
                                                    <i
                                                        className="fa-solid fa-check"
                                                        style={{
                                                            color: '#fff',
                                                            fontSize: '11px',
                                                        }}
                                                    ></i>
                                                </div>
                                                <span style={{ flex: 1 }}>{item}</span>
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
