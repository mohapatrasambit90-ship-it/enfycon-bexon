"use client";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const CsrProjects = ({ data }) => {
    return (
        <section className="csr-projects-section section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="sec-heading text-center">
                            <h2 className="sec-title uppercase">{data.title}</h2>
                            <p className="desc">{data.subtitle}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        speed={1500}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            el: ".swiper-pagination-csr",
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Pagination, Autoplay]}
                        className="csr-slider"
                        style={{ paddingBottom: '50px' }}
                    >
                        {data.items.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="csr-project-card" style={{
                                    background: 'white',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                    height: '100%'
                                }}>
                                    <div className="image-wrapper" style={{ height: '250px', position: 'relative' }}>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className="overlay d-flex align-items-end justify-content-end p-3" style={{
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                                            position: 'absolute',
                                            inset: 0
                                        }}>
                                        </div>
                                    </div>
                                    <div className="content p-4 text-center">
                                        <h4 className="title mb-3" style={{ fontSize: '20px', fontWeight: '600' }}>{item.title}</h4>
                                        <p className="desc mb-4" style={{ fontSize: '15px', color: '#666' }}>{item.desc}</p>
                                        <Link href={item.link} className="btn-text">
                                            Read More <i className="fa-regular fa-arrow-right ms-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-pagination-csr text-center mt-4"></div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default CsrProjects;
