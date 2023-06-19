// eslint-disable-next-line object-curly-newline
import { Navigation, Autoplay, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line object-curly-newline
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import bunner1 from '../../banners/carousel/Carousel_Front.jpg';
import bunner2 from '../../banners/carousel/Carousel_Second.jpg';
import bunner3 from '../../banners/carousel/Carousel_Third.jpeg';

import 'swiper/css/bundle';
import './bunnerSlider.scss';

export const BunnerSlider = () => {
  return (
    <div className="bunner__slider">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, A11y]}
        slidesPerView={1}
        autoplay
        loop
        navigation={{
          nextEl: '.arrow-right',
          prevEl: '.arrow-left',
        }}
        pagination={{
          el: '.custom-pagination',
          clickable: true,
        }}
      >
        <SwiperSlide>
          <img className="bunner__slider-img" src={bunner1} alt="bunner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="bunner__slider-img" src={bunner2} alt="bunner" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="bunner__slider-img" src={bunner3} alt="bunner" />
        </SwiperSlide>
      </Swiper>

      <div className="arrow-left">
        <MdOutlineKeyboardArrowLeft />
      </div>
      <div className="arrow-right">
        <MdOutlineKeyboardArrowRight />
      </div>
      <div className="custom-pagination" />
    </div>
  );
};
