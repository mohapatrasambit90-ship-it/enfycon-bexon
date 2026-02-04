"use client";
import { useState, memo } from "react";
import Image from "next/image";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { Autoplay, EffectFade, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = ({ slides }) => {
    const [controlledMainSwiper, setControlledMainSwiper] = useState(null);

    return (
        <section className="tj-slider-section">
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                effect="fade"
                speed={1400}
                autoplay={{ delay: 5000 }}
                modules={[Autoplay, Navigation, EffectFade, Thumbs]}
                thumbs={{ swiper: controlledMainSwiper }}
                navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
                className="hero-slider"
                style={{ height: "100%" }}
            >
                {slides.map(({ img, title, desc, slug }, idx) => (
                    <SwiperSlide
                        key={idx}
                        className={`tj-slider-item ${idx === 0 ? "swiper-slide-active" : ""}`}
                        style={{ height: "auto" }}
                    >
                        <div className="slider-bg-image">
                            <Image
                                src={img ? img : "/images/hero/slider-1.jpg"}
                                alt={title}
                                fill
                                priority={idx === 0}
                                sizes="100vw"
                                quality={90}
                                style={{ objectFit: "cover", zIndex: -1 }}
                            />
                        </div>
                        <div className="container">
                            <div className="slider-wrapper">
                                <div className="slider-content">
                                    <h1 className="slider-title">{title}</h1>
                                    <div className="slider-desc">{desc}</div>
                                    <div className="slider-btn">
                                        <ButtonPrimary text={"Learn More"} url={slug ? `/services/${slug}` : "/services"} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <div
                    className="hero-navigation d-inline-flex wow fadeIn"
                    data-wow-delay="1.5s"
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
            </Swiper>
            <Swiper
                onSwiper={setControlledMainSwiper} // capture thumbs swiper
                slidesPerView={3}
                spaceBetween={15}
                loop={false}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="hero-thumb wow fadeIn"
                data-wow-delay="2s"
            >
                {slides.map(
                    ({ thumbImg = "/images/hero/slider-thumb-1.webp", subtitle }, idx) => (
                        <SwiperSlide key={idx} className="thumb-item">
                            <Image
                                src={thumbImg}
                                alt={`${subtitle} thumbnail`}
                                width={80}
                                height={80}
                                quality={85}
                                sizes="(max-width: 768px) 33vw, 80px"
                                style={{ width: "100%", height: "auto" }}

                            />
                        </SwiperSlide>
                    )
                )}
            </Swiper>
        </section>
    );
};

export default memo(HeroSlider);
