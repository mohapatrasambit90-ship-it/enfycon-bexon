"use client";
import Link from "next/link";
import siteConfig from "@/config/siteConfig";
import { footerData } from "@/data/footerData";
import Search from "@/components/Search/Search";

const ContactMenu = ({ isContactOpen, setIsContactOpen }) => {
	const handleClick = () => {
		setIsContactOpen(false);
	};

	return (
		<>
			<div
				className={`body-overlay  ${isContactOpen ? "opened" : ""}`}
				onClick={handleClick}
			></div>
			<div
				className={`tj-offcanvas-area d-none d-lg-block  ${isContactOpen ? "opened" : ""
					}`}
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-between">
							<div className="hamburger_logo">
								<Link href="/" className="mobile_logo">
									<img src="/images/logos/enfycon-logo-only.png" alt="Logo" />
								</Link>
							</div>
							<div className="hamburger_close">
								<button className="hamburger_close_btn" onClick={handleClick}>
									<i className="fa-thin fa-times"></i>
								</button>
							</div>
						</div>
						<div className="offcanvas-text">
							<p>
								Developing personalize our customer journeys to increase
								satisfaction & loyalty of our expansion recognized by industry
								leaders.
							</p>
						</div>
						<div className="hamburger-search-area">
							<h5 className="hamburger-title">Search Now!</h5>
							<div className="hamburger_search">
								<Search active={isContactOpen} />
							</div>
						</div>
						<div className="hamburger-infos">
							<h5 className="hamburger-title">Contact Info</h5>
							<div className="contact-info">
								<div className="contact-item">
									<span className="subtitle">Phone</span>
									<Link className="contact-link" href={`tel:${siteConfig.phone.link}`}>
										{siteConfig.phone.display}
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Email</span>
									<Link className="contact-link" href={`mailto:${siteConfig.email}`}>
										{siteConfig.email}
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Location</span>
									<span className="contact-link">
										{footerData.contactInfo.address}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="hamburger-socials">
						<h5 className="hamburger-title">Follow Us</h5>
						<div className="social-links style-3">
							<ul>
								<li>
									<a href={siteConfig.socialLinks.facebook} target="_blank">
										<i className="fa-brands fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href={siteConfig.socialLinks.instagram} target="_blank">
										<i className="fa-brands fa-instagram"></i>
									</a>
								</li>
								<li>
									<a href={siteConfig.socialLinks.twitter} target="_blank">
										<i className="fa-brands fa-x-twitter"></i>
									</a>
								</li>
								<li>
									<a href={siteConfig.socialLinks.linkedin} target="_blank">
										<i className="fa-brands fa-linkedin-in"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div >
		</>
	);
};

export default ContactMenu;
