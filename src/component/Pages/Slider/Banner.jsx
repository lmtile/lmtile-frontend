import React, { useEffect, useState } from 'react';
import './Banner.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import BannerItem from './BannerItem';
import sliderImg from '../../../assets/img/slider/image0.png'
import sliderImg2 from '../../../assets/img/slider/image1.jpeg'


const Banner = () => {
 
    const slider = [

        {
            "id": "1",
            "picture": sliderImg
        },
        {
            "id": "2",
            "picture": sliderImg2
        }
    ]
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper banner-slider"
            >
                {slider.map((products) => (
                    <SwiperSlide>
                        <BannerItem key={products._id} products={products}></BannerItem>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
export default Banner;