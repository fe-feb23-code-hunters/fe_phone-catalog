import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import './bunnetSlider.scss';

import bunner1 from '../../banners/carousel/Carousel_Front.jpg';

export const BunnerSlider = () => {
  return (
    <div className="bunner__wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        navigation
        loop
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            className="bunner"
            src={bunner1}
            alt="bunner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bunner"
            src={bunner1}
            alt="bunner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bunner"
            src={bunner1}
            alt="bunner"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bunner"
            src={bunner1}
            alt="bunner"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
