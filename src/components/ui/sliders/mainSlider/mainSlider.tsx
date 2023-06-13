import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './mainSlider.module.scss';
import bunner1 from '../../../../img/banners/carousel/Carousel_Front.jpg';
import bunner2 from '../../../../img/banners/carousel/Carousel_Second.jpg';
import bunner3 from '../../../../img/banners/carousel/Carousel_Third.jpeg';

import 'swiper/scss';
import './swiper/navigation.scss';
import './swiper/pagination.scss';
import 'swiper/scss/scrollbar';

export const MainSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      spaceBetween={0}
      autoplay
      loop
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className={classes.bunner__img__wrapper}>
          <img
            className={classes.bunner__img}
            src={bunner1}
            alt="bunner"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={classes.bunner__img__wrapper}>
          <img
            className={classes.bunner__img}
            src={bunner2}
            alt="bunner"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={classes.bunner__img__wrapper}>
          <img
            className={classes.bunner__img}
            src={bunner3}
            alt="bunner"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
