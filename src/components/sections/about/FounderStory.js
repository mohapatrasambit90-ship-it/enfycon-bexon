import Image from "next/image";
import React from "react";

const FounderStory = ({ id }) => {
    return (
        <section id={id} className="tj-about-section section-gap">
            <div className="container">
                <div className="about-content-area">
                    <div className="sec-heading style-2">
                        <span className="sub-title founder-story-title wow fadeInUp" data-wow-delay=".3s">
                            Founder&apos;s Story
                        </span>

                        <div className="desc wow fadeInUp" data-wow-delay=".4s">
                            {/* Float Image Right */}
                            <div className="about-img-area style-3 founder-story-image">
                                <div className="about-img overflow-hidden" style={{ borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
                                    <Image
                                        src="/images/team/founder2.jpeg"
                                        alt="Ashutosh Dash - Co-Founder & CEO"
                                        width={500}
                                        height={600}
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>
                            </div>

                            <p>
                                Ashutosh Dash and his teams founded enfycon Inc with a clear belief: <strong>technology creates value only when it is built with integrity, trust, and a deep understanding of people.</strong>
                            </p>
                            <p>
                                With a strong foundation in technology and global IT services, he began his journey working closely with enterprises, startups, and consulting partners across the United States and India. Early in his career, he witnessed both the promise and the pitfalls of traditional IT services—where speed often came at the cost of quality, and scale at the cost of relationships. These experiences shaped his conviction that <em>long-term success comes from partnership, not transactions.</em>
                            </p>
                            <p>
                                In 2018, he established enfycon Inc to bridge this gap. The vision was simple yet bold: build a company that delivers <strong>world-class technology and talent</strong>, while remaining deeply human at its core. enfycon was designed to be more than a staffing or consulting firm—it was built as a <strong>trusted technology partner</strong>, aligning itself with client goals, timelines, and outcomes as if they were its own.
                            </p>
                            <p>
                                Under his leadership, enfycon expanded across the <strong>USA, India, and the UAE</strong>, supporting enterprises with <strong>Technology Hiring Solutions, AI-driven solutions, and digital transformation services.</strong> What differentiates enfycon is its emphasis on accountability, transparency, and long-term relationships—both with clients and the consultants who represent the company on the ground.
                            </p>
                            <p>
                                He believes that people are not resources—they are the <strong>foundation.</strong> From ensuring ethical consulting practices and timely payments to creating growth opportunities for teams, enfycon’s culture reflects his commitment to dignity, trust, and shared success. This philosophy has enabled the company to grow organically through client referrals, repeat engagements, and enduring partnerships.
                            </p>
                            <p>
                                Today, as enfycon evolves into AI-led products and advanced technology solutions, he remains anchored to the same principle that inspired the company’s inception: <em>when you take care of people, innovation and success naturally follow.</em>
                            </p>
                        </div>

                        <div className="founder-quote-box wow fadeInUp" data-wow-delay=".5s" style={{ marginTop: "40px", borderLeft: "4px solid var(--tj-theme-primary)", paddingLeft: "20px", clear: "both" }}>
                            <h4 className="title" style={{ color: "var(--tj-theme-primary)", marginBottom: "15px" }}>A Message from the Co-Founder</h4>
                            <p style={{ fontStyle: "italic", fontSize: "18px", lineHeight: "1.6", color: "var(--tj-heading-primary)" }}>
                                “For me, business has always been about people—clients who trust us with their challenges, and teams who trust us with their careers. Technology will continue to evolve, but values should not. At enfycon, we measure success not just by revenue, but by the relationships we build and the impact we create together.”
                            </p>
                            <p className="author" style={{ marginTop: "15px", fontWeight: "600" }}>— Ashutosh Dash, Co-Founder & CEO, enfycon Inc</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderStory;
