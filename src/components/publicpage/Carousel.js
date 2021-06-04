import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation, Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination, Navigation]);

export const Carousel = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}

                pagination={{
                    clickable: true
                }} navigation={true} className="mySwiper2">
                <SwiperSlide><img className="d-block w-100" src="/images/slide112.jpg" alt="First slide" /></SwiperSlide>
                <SwiperSlide><img className="d-block w-100" src="/images/slide783.jpg" alt="Second slide" /></SwiperSlide>
                <SwiperSlide><img className="d-block w-100" src="/images/slide896.jpg" alt="Third slide" /></SwiperSlide>
            </Swiper>
        </>

    )
}
