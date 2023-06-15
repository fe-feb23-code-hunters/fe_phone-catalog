import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from '../../productCard/productCard';
import 'swiper/css/bundle';
import './productSlider.scss';

interface Props {
  title?: string;
}

export const ProductSlider: React.FC<Props> = ({ title }) => {
  return (
    <div className="product__wrapper">
      <h2 className="product-slider__title">{title}</h2>
      <Swiper
        className="product__swiper"
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={4}
        navigation
      >
        <SwiperSlide>
          <ProductCard
            id="1"
            imgURL="#"
            price={0}
            screen="2"
            oldPrice={0}
            capacity="22"
            ram="4"
            title="Hello"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            id="1"
            imgURL="#"
            price={0}
            screen="2"
            oldPrice={0}
            capacity="22"
            ram="4"
            title="Hello"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            id="1"
            imgURL="#"
            price={0}
            screen="2"
            oldPrice={0}
            capacity="22"
            ram="4"
            title="Hello"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            id="1"
            imgURL="#"
            price={0}
            screen="2"
            oldPrice={0}
            capacity="22"
            ram="4"
            title="Hello"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            id="1"
            imgURL="#"
            price={0}
            screen="2"
            oldPrice={0}
            capacity="22"
            ram="4"
            title="Hello"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            id="1"
            imgURL="#"
            price={0}
            screen="2"
            oldPrice={0}
            capacity="22"
            ram="4"
            title="Hello"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            id="1"
            imgURL="#"
            price={0}
            screen="2"
            oldPrice={0}
            capacity="22"
            ram="4"
            title="Hello"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            id="1"
            imgURL="#"
            price={0}
            screen="2"
            oldPrice={0}
            capacity="22"
            ram="4"
            title="Hello"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
