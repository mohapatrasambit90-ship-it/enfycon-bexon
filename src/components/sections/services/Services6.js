"use client";
import ServiceCard from "@/components/shared/cards/ServiceCard7";
import ServicesSlider3 from "@/components/shared/services/ServicesSlider3";
import getALlServices from "@/libs/getALlServices";
import Link from "next/link";
import { useState, useRef } from "react";

const Services6 = () => {
	const [activeTab, setActiveTab] = useState(0);

	const prevRef = useRef(null);
	const nextRef = useRef(null);

	const tabs = [
		{
			id: "it-professional-staffing",
			name: "IT Professional Staffing",
			title: "IT Professional Staffing",
			desc: "Connect with top-tier IT talent to power your digital transformation. Our staffing solutions provide skilled professionals across all technology domains, ensuring you have the expertise to drive innovation.",
			services: [
				{
					id: 1,
					title: "US IT Staffing",
					desc3: "Access elite US-based IT professionals to strengthen your team with top-tier talent for mission-critical projects.",
					img4: "/images/service/us-it-staffing.png",
				},
				{
					id: 2,
					title: "Domestic IT Staffing",
					desc3: "Connect with skilled domestic IT talent across various technologies to meet your local business requirements.",
					img4: "/images/service/domestic-it-staffing.png",
				},
				{
					id: 3,
					title: "Offshore Dedicated Teams",
					desc3: "Build dedicated offshore development teams that work as an extension of your organization, delivering quality at scale.",
					img4: "/images/service/offshore-dedicated-teams.png",
				},
			],
		},
		{
			id: "ai-allied-services",
			name: "Custom Professional AI Services",
			title: "Custom Professional AI Services",
			desc: "Transform your business with cutting-edge AI solutions. We harness machine learning and emerging technologies to build intelligent systems that automate processes, enhance decision-making, and drive innovation.",
			services: [
				{
					id: 1,
					title: "AI & Agentic Solutions Service",
					desc3: "Leverage autonomous AI agents and intelligent systems to automate complex workflows and enhance operational efficiency.",
					img4: "/images/service/ai-agentic-solutions.jpg",
				},
				{
					id: 2,
					title: "AI-First Platforms Engineering",
					desc3: "Design and build AI-native platforms that integrate machine learning capabilities at their core for scalable intelligent solutions.",
					img4: "/images/service/ai-first-platforms.jpg",
				},
				{
					id: 3,
					title: "Personalized Customer Engagement",
					desc3: "Create personalized customer experiences using AI-driven insights and intelligent engagement strategies.",
					img4: "/images/service/personalized-customer-engagement.jpg",
				},

			],
		},

		{
			id: "data-analytics",
			name: "Data & Analytics",
			title: "Data & Analytics",
			desc: "Unlock the power of your data with advanced analytics solutions. We transform raw data into actionable insights through data engineering, predictive modeling, and visualizations that drive better business decisions.",
			services: [
				{
					id: 1,
					title: "Data, Cloud & Enterprise Modernization",
					desc3: "Modernize your enterprise infrastructure with cloud-native solutions and advanced data management strategies.",
					img4: "/images/service/enterprise-modernization..jpg",
				},
				{
					id: 2,
					title: "Advanced Analytics & Business Intelligence",
					desc3: "Transform data into actionable insights with powerful business intelligence dashboards, predictive analytics, and advanced visualization solutions.",
					img4: "/images/service/advanced-analytics.jpg",
				},
				{
					id: 3,
					title: "Data Engineering & Pipeline Automation",
					desc3: "Build robust data pipelines and automated workflows to streamline data processing and ensure data quality.",
					img4: "/images/service/data-engineering.jpg",
				},
			]
		},

		{
			id: "cybersecurity-services",
			name: "Cybersecurity Services",
			title: "Cybersecurity Services",
			desc: "Protect your digital assets with enterprise-grade security solutions. Our cybersecurity experts implement robust defense strategies, threat detection systems, and compliance frameworks to safeguard your business from threats.",
			services: [
				{
					id: 1,
					title: "Comprehensive Security Assessment",
					desc3: "Conduct thorough security audits and vulnerability assessments to identify and mitigate potential threats across your infrastructure.",
					img4: "/images/service/security-assessment.jpg",
				},
				{
					id: 2,
					title: "Operational Security Guidelines",
					desc3: "Implement robust operational security protocols and best practices to protect daily business operations from cyber threats.",
					img4: "/images/service/operational-security.jpg",
				},
				{
					id: 3,
					title: "Regulatory Compliance",
					desc3: "Ensure adherence to industry regulations and compliance standards to protect sensitive data and maintain trust.",
					img4: "/images/service/regulatory-compliance.jpg",
				},
				{
					id: 4,
					title: "GRC Consulting",
					desc3: "Expert Governance, Risk, and Compliance consulting to align security practices with business objectives and regulatory requirements.",
					img4: "/images/service/grc-consulting.jpg",
				},
			],
		},
	];

	return (
		<section className="h6-service section-gap bg-dark">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-left style-2 style-6 ">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>OUR Services
							</span>
							<h2 className="sec-title  title-anim tw:!text-white ">
								Innovative Solutions for Modern Enterprises
							</h2>
						</div>
					</div>
				</div>

				{/* Desktop View (Tabs + Slider) */}
				<div className="d-none d-lg-block">
					{/* Tabs Navigation */}
					<div className="row mb-5 justify-content-center">
						<div className="col-12 col-lg-12">
							<ul className="service-tabs d-flex flex-wrap  gap-1 list-unstyled border-bottom pb-2 border-secondary" style={{ borderColor: "rgba(255,255,255,0.1)!important" }}>
								{tabs.map((tab, index) => (
									<li key={index} className="nav-item">
										<button
											className={`nav-link bg-transparent border-0 px-3 py-2 w-full service-tab-btn ${activeTab === index
												? "text-white fw-bold active"
												: "inactive-tab"
												}`}
											onClick={() => setActiveTab(index)}
											style={{
												transition: "all 0.3s ease",
												cursor: "pointer",
												fontSize: "16px",
												position: "relative",
												width: "100%",
												textAlign: "left",

											}}
										>
											{tab.name}
											{activeTab === index && (
												<span
													style={{
														position: "absolute",
														bottom: "-9px",
														left: "0",
														width: "100%",
														height: "2px",
														backgroundColor: "#ffffff",
													}}
												/>
											)}
										</button>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Tab Content */}
					<div className="row mb-4 align-items-end justify-content-between">
						<div className="col-lg-8 col-12">
							<div className="tab-content-header mb-4 mb-lg-0">
								<h3 className="section-title text-white mb-3 wow fadeInUp" data-wow-delay=".3s">
									{tabs[activeTab].title}
								</h3>
								<p className="text-light opacity-80 wow fadeInUp" data-wow-delay=".4s" style={{ maxWidth: "700px" }}>
									{tabs[activeTab].desc}
								</p>
							</div>
						</div>
						<div className="col-lg-4 col-12 text-end">
							<div className="slider-navigation d-flex justify-content-lg-end justify-content-start mb-4 gap-2 wow fadeInUp" data-wow-delay=".5s">
								<button ref={prevRef} className="service-3-prev slider-prev service-nav-btn">
									<span className="anim-icon">
										<i className="tji-arrow-left"></i>
										<i className="tji-arrow-left"></i>
									</span>
								</button>
								<button ref={nextRef} className="service-3-next slider-next service-nav-btn">
									<span className="anim-icon">
										<i className="tji-arrow-right"></i>
										<i className="tji-arrow-right"></i>
									</span>
								</button>
							</div>
						</div>
					</div>

					<div className="row ">
						<div className="col-12 ">
							<ServicesSlider3 services={tabs[activeTab].services} hideNavigation={true} prevRef={prevRef} nextRef={nextRef} />
						</div>
					</div>
				</div>

				{/* Mobile View (List of Categories) */}
				<div className="d-block d-lg-none">
					<div className="row">
						{tabs.map((tab, index) => (
							<div key={index} className="col-12 mb-5">
								<div className="mobile-service-category">
									<h3 className="section-title text-white mb-3">
										<Link href={`/services`}>{tab.title}</Link>
									</h3>
									<p className="text-light opacity-75 mb-4">
										{tab.desc}
									</p>
									<div className="mobile-service-card">
										{/* Show the first service card as representative */}
										{tab.services && tab.services.length > 0 && (
											<ServiceCard service={tab.services[0]} idx={0} />
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services6;
