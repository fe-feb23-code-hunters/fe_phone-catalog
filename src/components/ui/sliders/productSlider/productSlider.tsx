import {
  Navigation,
  A11y,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '../../../productCard/productCard';
import classes from './productSlider.module.scss';

import './swiper/swiper.scss';
import './swiper/navigation.scss';

export const ProductSlider = () => {
  return (
    <div className={classes.productSlider__wrapper}>
      <h2>hello</h2>
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={4}
        spaceBetween={16}
        navigation
      >
        <SwiperSlide>
          <ProductCard
            imgURL="#"
            price={10}
            oldPrice={5}
            screen="5.8"
            ram={64}
            title="iPhone"
            capacity={55}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            imgURL="#"
            price={10}
            oldPrice={5}
            screen="5.8"
            ram={64}
            title="iPhone"
            capacity={55}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            imgURL="#"
            price={10}
            oldPrice={5}
            screen="5.8"
            ram={64}
            title="iPhone"
            capacity={55}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            imgURL="#"
            price={10}
            oldPrice={5}
            screen="5.8"
            ram={64}
            title="iPhone"
            capacity={55}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            imgURL="#"
            price={10}
            oldPrice={5}
            screen="5.8"
            ram={64}
            title="iPhone"
            capacity={55}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            imgURL="#"
            price={10}
            oldPrice={5}
            screen="5.8"
            ram={64}
            title="iPhone"
            capacity={55}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            imgURL="#"
            price={10}
            oldPrice={5}
            screen="5.8"
            ram={64}
            title="iPhone"
            capacity={55}
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            imgURL="#"
            price={10}
            oldPrice={5}
            screen="5.8"
            ram={64}
            title="iPhone"
            capacity={55}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
