import BlogSlider from "./BlogSlider";
import { getAllBlogs } from "@/libs/wpBlogs";

const Blogs2 = async ({
	categoryName = null,
	title = "Strategies and Insights.",
	subtitle = "Read Blogs",
	description = "Developing personalized customer journeys to increase satisfaction and loyalty.",
}) => {
	let blogs = [];

	// 1. Try fetching with category if provided
	if (categoryName) {
		try {
			blogs = await getAllBlogs(categoryName);
		} catch (e) {
			console.warn("Blogs2: Failed to fetch by category, trying fallback.", e);
		}
	}

	// 2. Fallback to generic blogs if no data found (or fetch failed/no category)
	if (!blogs || blogs.length === 0) {
		try {
			blogs = await getAllBlogs(null);
		} catch (e) {
			console.error("Blogs2: Failed to fetch generic blogs.", e);
			blogs = [];
		}
	}

	// Slice to 4 items
	blogs = blogs ? blogs.slice(0, 4) : [];

	if (!blogs || blogs.length === 0) {
		return null;
	}

	return (
		<section className="tj-blog-section-2 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								{subtitle}
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h2 className="sec-title text-anim">
										{title}
									</h2>
								</div>
								<div className="wow fadeInUp" data-wow-delay=".5s">
									<p className="desc">
										{description}
									</p>
								</div>
								<div
									className="slider-navigation d-none d-md-inline-flex wow fadeInUp"
									data-wow-delay=".7s"
								>
									<div className="slider-prev" role="button">
										<span className="anim-icon">
											<i className="tji-arrow-left"></i>
											<i className="tji-arrow-left"></i>
										</span>
									</div>
									<div className="slider-next" role="button">
										<span className="anim-icon">
											<i className="tji-arrow-right"></i>
											<i className="tji-arrow-right"></i>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="blog-wrapper wow fadeIn" data-wow-delay=".5s">
							<BlogSlider blogs={blogs} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs2;

