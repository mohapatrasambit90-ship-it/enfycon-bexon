"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard2 from "@/components/shared/cards/BlogCard2";

const BlogSlider = ({ blogs }) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={15}
            loop={true}
            speed={1500}
            loopAdditionalSlides={1}
            autoplay={{
                delay: 5000,
            }}
            pagination={{
                el: ".swiper-pagination-area",
                clickable: true,
            }}
            navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
            breakpoints={{
                768: {
                    spaceBetween: 20,
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="blog-slider"
        >
            {blogs?.length
                ? blogs?.map((blog, idx) => (
                    <SwiperSlide key={idx}>
                        <BlogCard2 blog={blog} idx={idx} />
                    </SwiperSlide>
                ))
                : ""}
            <div className="swiper-pagination-area"></div>
        </Swiper>
    );
};

export default BlogSlider;
