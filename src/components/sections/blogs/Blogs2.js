import BlogSlider from "./BlogSlider";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { getAllBlogs } from "@/libs/wpBlogs";

const Blogs2 = async ({
	blogs: initialBlogs = null,
	categoryName = null,
	limit = 4,
	title = "Strategies and Insights.",
	subtitle = "Read Blogs",
	description = "Developing personalized customer journeys to increase satisfaction and loyalty.",
}) => {
	let blogs = Array.isArray(initialBlogs) ? initialBlogs : [];

	// 1. Prefer passed-in blogs (if available)
	if (blogs.length > 0) {
		blogs = blogs.slice(0, limit);
	}

	// 2. Try fetching with category if provided
	if (blogs.length === 0 && categoryName) {
		try {
			blogs = await getAllBlogs(categoryName, limit);
		} catch (e) {
			console.warn("Blogs2: Failed to fetch by category, trying fallback.", e);
		}
	}

	// 3. Fallback to generic blogs if no data found (or fetch failed/no category)
	if (!blogs || blogs.length === 0) {
		try {
			blogs = await getAllBlogs(null, limit);
		} catch (e) {
			console.error("Blogs2: Failed to fetch generic blogs.", e);
			blogs = [];
		}
	}

	// Ensure limit is respected
	blogs = blogs ? blogs.slice(0, limit) : [];

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
								<div className="d-flex flex-column align-items-end gap-3">
									<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
										<ButtonPrimary text={"Show All Blogs"} url={"/blogs"} />
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

