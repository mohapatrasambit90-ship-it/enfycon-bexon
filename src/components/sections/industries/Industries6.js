"use client";

import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import IndustryCard6 from "@/components/shared/cards/IndustryCard6";
import { industriesData } from "@/data/industriesData";
import { useCallback, useState } from "react";

const Industries6 = () => {
	const industries = industriesData || [];
	const [currentIndex, setCurrentIndex] = useState(2);
	const handleCurrentIndex = useCallback(idx => {
		setCurrentIndex(idx);
	}, []);

	return (
		<section className="h6-project h6-project--light industries-accordion section-gap ">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="heading-wrap-content">
							<div className="sec-heading style-2 style-6">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Industries
								</span>
								<h2 className="sec-title title-anim">
									Industries We Serve
								</h2>
							</div>
							<div className="btn-area wow fadeInUp" data-wow-delay=".8s">
								<ButtonPrimary text={"All Industries"} url={"/industries"} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div
							className="h6-project-inner wow fadeInUp"
							data-wow-delay="0.6s"
						>
							{industries.map((industry, idx) => (
								<IndustryCard6
									key={industry.id || idx}
									industry={industry}
									idx={idx}
									currentIndex={currentIndex}
									handleCurrentIndex={handleCurrentIndex}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Industries6;
