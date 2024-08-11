import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../components/styles.css';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { slider1, slider3 } from '../../assets';

export default function App() {
  return (
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
        <div className="slider-container">
          <img src={slider1} className="slider-image" alt="Slide 1" />
          <div className="overlay">
            <h2 className="overlay-text">ABOUT US</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-container">
          <img src={slider3} className="slider-image" alt="Slide 2" />
          <div className="overlay">
            <h2 className="overlay-text">Your Text Here for Slide 2</h2>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
