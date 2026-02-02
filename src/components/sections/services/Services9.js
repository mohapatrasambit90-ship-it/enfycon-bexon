"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";

const Services9 = () => {
	const history = [
		{
			title: "Inception & Vision",
			desc: "Ashutosh Dash founded enfycon Inc with a vision to build a company that delivers world-class technology while remaining deeply human at its core. It was designed to be a trusted technology partner, aligning with client goals as if they were its own.",
			images: [
				"/images/history/history-inception.png",
			],
			year: 2018,
			icon: "fa-light fa-lightbulb",
		},
		{
			title: "Building Foundations",
			desc: "Focused on creating value through integrity and trust, we established strong relationships with enterprises and startups. We proved that long-term success comes from partnership, not just transactions.",
			images: [
				"/images/history/history-foundation.png",
			],
			year: "2019",
			icon: "fa-light fa-building",
		},
		{
			title: "Global Expansion",
			desc: "Enfycon expanded operations across the USA, India, and the UAE, supporting enterprises with Technology Hiring Solutions, AI-driven solutions, and digital transformation services, while emphasizing accountability and transparency.",
			images: [
				"/images/history/history-expansion.png",
			],
			year: "2021",
			icon: "fa-light fa-globe",
		},
		{
			title: "AI-Led Innovation",
			desc: "Evolving into AI-led products and advanced technology solutions, we remain anchored by the principle that taking care of people drives innovation. We continue to measure success by the relationships we build and the impact we create.",
			images: [
				"/images/history/history-innovation.png",
			],
			year: 2024,
			icon: "fa-light fa-brain-circuit",
		},
		{
			title: "Strategic Partnerships",
			desc: "Forged strategic partnerships with the Government of India and IICL, a Hyderabad-based IT company, to drive large-scale digital initiatives and foster technology-driven growth.",
			images: [
				"/images/history/history-partnerships.png",
			],
			year: 2025,
			icon: "fa-light fa-handshake",
		},
	];

	return (
		<section className="h9-service section-gap bg-gray-1  tj-sticky-panel-container-2 tj-progress-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-4 ">
						<div className="sec-heading style-8  tj-sticky-panel-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Our Journey
							</span>
							<h2 className="sec-title title-anim">
								Milestones of Our <span>Success</span>
							</h2>
							<p className="desc mt-3 text-white opacity-75">
								From inception to innovation, discover the key moments that shaped enfycon into a trusted technology partner.
							</p>
						</div>
					</div>
					<div className="col-12 col-lg-8 ">
						<div className="h9-service-scroll-progress tj-scroll-progress tj-sticky-panel-2">
							{history?.map((item, idx) => (
								<div key={idx} className={`tj-scroll-progress-item ${idx === 0 ? 'active' : ''}`}>
									<h5 className="tj-scroll-progress-sln">{item.year}</h5>
									<div className="tj-scroll-progress-ind">
										<div className="tj-scroll-progress-ind-inner"></div>
									</div>
								</div>
							))}
						</div>
						<div className="service-wrapper h9-service-wrapper">
							{history?.length
								? history?.map((milestone, idx) => (
									<div key={idx} className="service-item style-5 tj-progress-item">
										<div className="service-content-area">
											<div className="service-icon">
												<i className={milestone.icon}></i>
											</div>
											<div className="service-content">
												<div className="d-flex align-items-center gap-3 mb-2">
													<h4 className="title mb-0">{milestone.title}</h4>
													<span className="badge bg-primary text-white px-3 py-2" style={{ fontSize: '14px' }}>
														{milestone.year}
													</span>
												</div>
												<p className="desc">
													{milestone.desc}
												</p>
											</div>
										</div>
										<div className="service-img">
											{milestone.images && milestone.images[0] && (
												<Image
													src={milestone.images[0]}
													alt={milestone.title}
													width={400}
													height={300}
													style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
												/>
											)}
										</div>
									</div>
								))
								: ""}
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
			<div className="bg-shape-3">
				<img src="/images/shape/h7-testimonial-shape-blur.svg" alt="" />
			</div>
		</section>
	);
};

export default Services9;
