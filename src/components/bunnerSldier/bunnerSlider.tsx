import { Navigation, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import bunner1 from '../../banners/carousel/Carousel_Front.jpg';

import 'swiper/css/bundle';
import './bunnerSlider.scss';

export const BunnerSlider = () => {
  return (
    <Swiper
      className="bunner__slider"
      modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={16}
      slidesPerView={1}
      autoplay
      navigation
      pagination
    >
      <SwiperSlide>
        <img className="bunner__slider-img" src={bunner1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="bunner__slider-img" src={bunner1} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
