import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../components/styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { careerImg, heroBg, slider1, slider2, slider3 } from '../../assets';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
