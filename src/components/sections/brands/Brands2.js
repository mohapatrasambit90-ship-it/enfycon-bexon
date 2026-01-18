import BrandSlider1 from "@/components/shared/brands/BrandSlider1";

const Brands2 = () => {
	return (
		<section className="tj-client-section section-top-gap section-bottom-gap">
			<div className="container-fluid client-container">
				<div className="row">
					<div className="col-12 ">

						<div className="client-content-wrapper text-center mb-5">
							<div className="row justify-content-center">
								<div className="col-lg-8">
									<div className="sec-heading mb-4 fw-bold">
										<h2 className="sec-title">
											Innovation Powered by Technology
										</h2>
									</div>
									<div className="desc">
										<p>
											At enfycon, we are committed to driving innovation through cutting-edge technology. Our focus is on delivering impactful, scalable, and future-ready solutions that help organizations modernize and operate efficiently. We specialize in GovTech solutions and end-to-end digital transformation across mining, government, agriculture, education, healthcare, and more—enabling us to deliver impactful, scalable, and future-ready solutions helping organizations modernize and operate efficiently.
										</p>
									</div>
								</div>
							</div>
						</div>
						<BrandSlider1 />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands2;
