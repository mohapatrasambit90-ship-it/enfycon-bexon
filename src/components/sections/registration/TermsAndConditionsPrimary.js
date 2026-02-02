import Link from "next/link";

const TermsAndConditionsPrimary = () => {
	return (
		<section className="terms-and-conditions section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10">
						<div className="terms-and-conditions-wrapper">
							<div>
								<h2>
									Terms & Conditions
								</h2>
								<p className="muted">enfycon Inc.</p>

								<div id="who-we-are">
									<h3>Who we are</h3>
									<p>
										enfycon is a trusted IT solutions provider committed to delivering innovative technology solutions tailored to the unique needs of businesses. With a focus on excellence and a dedication to customer satisfaction, we empower organizations to thrive in today's digital landscape. Explore our website at{" "}
										<Link href="https://enfycon.com">https://enfycon.com</Link> to learn more about our services and how we can help your business succeed.
									</p>
								</div>

								<div id="comments">
									<h3>Comments</h3>
									<p>
										When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.
									</p>
									<p>
										An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here:{" "}
										<Link href="https://automattic.com/privacy/" target="_blank" rel="noopener">
											https://automattic.com/privacy/
										</Link>
										. After approval of your comment, your profile picture is visible to the public in the context of your comment.
									</p>
								</div>

								<div id="media">
									<h3>Media</h3>
									<p>
										If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
									</p>
								</div>

								<div id="cookies">
									<h3>Cookies</h3>
									<p>
										If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
									</p>
									<p>
										If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser. When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks.
									</p>
									<p>
										If you log out of your account, the login cookies will be removed.
									</p>
									<p>
										If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
									</p>
								</div>

								<div id="embedded-content">
									<h3>Embedded content from other websites</h3>
									<p>
										Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
									</p>
									<p>
										These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
									</p>
								</div>

								<div id="data-retention">
									<h3>How long we retain your data</h3>
									<p>
										If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
									</p>
									<p>
										For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
									</p>
								</div>

								<div id="data-rights">
									<h3>What rights you have over your data</h3>
									<p>
										If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
									</p>
								</div>

								<div id="data-sent">
									<h3>Where your data is sent</h3>
									<p>
										Visitor comments may be checked through an automated spam detection service.
									</p>
									<p>
										enfycon builds custom AI-driven software using modern, cutting-edge technologies.
									</p>
								</div>

								<div id="contact-us" className="mt-5">
									<h3>Contact Us</h3>
									<p>
										3921 Long Prairie Road,<br />
										Building 5,<br />
										Flower Mound, TX 75028,<br />
										United States
									</p>
									<p>
										<strong>Phone:</strong>{" "}
										<Link href="tel:+12012017078">+1 201.201.7078</Link>
									</p>
									<p>
										<strong>Email:</strong>{" "}
										<Link href="mailto:office@enfycon.com">office@enfycon.com</Link>
									</p>
								</div>

								<p className="muted mt-5">
									<small>
										This Terms & Conditions page is provided for general guidance only and does not constitute legal advice. Please consult your legal advisor to adapt it to your specific needs and local laws.
									</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TermsAndConditionsPrimary;
