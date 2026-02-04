import Link from "next/link";

const IndustryCard6 = ({ industry, idx, handleCurrentIndex, currentIndex }) => {
	const { title, image, id, desc } = industry || {};
	const href = id ? `/industries/${id}` : "/industries";
	const bgImage = image || "/images/industries/default.png";

	return (
		<div
			className={`project-item h6-project-item ${
				currentIndex === idx ? "active" : ""
			}`}
			onMouseEnter={() => handleCurrentIndex(idx)}
		>
			<div
				className="project-item-inner h6-project-item-inner"
				style={{ backgroundImage: `url("${bgImage}")` }}
			>
				<div className="industry-vertical">
					<span>{title || "Industry"}</span>
				</div>
				<div className="project-content">
					<div className="project-text">
						<h3 className="title">
							<Link href={href}>{title || "Industry"}</Link>
						</h3>
						{desc ? <p className="industry-desc">{desc}</p> : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default IndustryCard6;
