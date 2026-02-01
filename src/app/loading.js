import React from "react";

const Loading = () => {
    return (
        <section className="tj-slider-section">
            {/* Header Skeleton */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                backgroundColor: 'rgb(14, 14, 41)',
                zIndex: 999,
                padding: '0 20px',
                height: 90, // Approximate height provided by padding + line-height
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo Skeleton */}
                    <div className="skeleton" style={{ width: 140, height: 40, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>

                    {/* Navbar Skeleton (Desktop) */}
                    <div className="d-none d-lg-flex gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="skeleton" style={{ width: 70, height: 16, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                        ))}
                    </div>

                    {/* Right Side Info Skeleton */}
                    <div className="d-none d-lg-flex gap-3 align-items-center">
                        <div className="skeleton" style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                        <div className="skeleton" style={{ width: 140, height: 50, borderRadius: 0, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                        <div className="skeleton" style={{ width: 30, height: 20, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                    </div>
                </div>
            </div>

            <div className="tj-slider-item" style={{ display: 'block' }}>
                {/* Background Skeleton mimicking the gradient overlay */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    backgroundColor: '#0c1e21', zIndex: -1
                }}></div>

                <div className="container">
                    {/* 
                      Matching structure: .slider-wrapper -> .slider-content
                      Padding is controlled by .slider-wrapper in CSS (padding: 195px 0 347px by default)
                    */}
                    <div className="slider-wrapper">
                        <div className="slider-content">
                            {/* Title: Size 64px, line-height 1.042, mb 10px */}
                            <div className="skeleton mb-2" style={{ width: '90%', height: 60, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                            <div className="skeleton mb-4" style={{ width: '70%', height: 60, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>

                            {/* Desc: Size 18px, lh 1.444, max-width 440px */}
                            <div className="skeleton mb-2" style={{ width: 440, height: 20, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                            <div className="skeleton mb-2" style={{ width: 400, height: 20, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>

                            {/* Button: margin-top 25px */}
                            <div className="skeleton" style={{ width: 180, height: 50, marginTop: 40, borderRadius: 0, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                        </div>
                    </div>
                </div>

                {/* Navigation Skeleton - Matches .hero-navigation positioning */}
                <div className="hero-navigation d-none d-md-inline-flex" style={{ zIndex: 5, padding: '0 30px', justifyContent: 'space-between', width: '100%', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}>
                    <div className="skeleton" style={{ width: 60, height: 60, backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, borderStyle: 'solid' }}></div>
                    <div className="skeleton" style={{ width: 60, height: 60, backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, borderStyle: 'solid' }}></div>
                </div>

                {/* Thumbs Skeleton - Matches .hero-thumb positioning */}
                <div className="hero-thumb d-none d-md-flex" style={{ position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)', padding: '0 10px', width: '100%', maxWidth: 1320, gap: 15, justifyContent: 'flex-start' }}>
                    <div className="skeleton" style={{ width: 80, height: 80, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                    <div className="skeleton" style={{ width: 80, height: 80, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                    <div className="skeleton" style={{ width: 80, height: 80, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
                </div>

                {/* Circle Text Skeleton - Matches .circle-text-wrap */}
                <div className="circle-text-wrap d-none d-lg-block" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div className="skeleton" style={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        width: 160, height: 160, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)'
                    }}></div>
                </div>

            </div>
        </section>
    );
};

export default Loading;
