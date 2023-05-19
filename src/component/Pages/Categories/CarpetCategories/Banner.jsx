import React from 'react';
import './Banner.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import BannerItem from './BannerItem';
import sliderImg1 from '../../../../assets/img/Slider img/carpet/1.png'
import sliderImg2 from '../../../../assets/img/Slider img/carpet/2.png'
import sliderImg3 from '../../../../assets/img/Slider img/carpet/3.png'
import sliderImg4 from '../../../../assets/img/Slider img/carpet/4.png'






const Banner = () => {
 
    const slider = [

        {
            "id": "1",
            "picture": sliderImg1
        },
        {
            "id": "2",
            "picture": sliderImg2
        },
        {
            "id": "3",
            "picture": sliderImg3
        },
        {
            "id": "4",
            "picture": sliderImg4
        },
       
        
        
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