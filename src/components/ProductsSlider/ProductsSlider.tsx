import React, { useEffect, useRef } from 'react';
import { Navigation, Autoplay, Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from '../../types/product';
import ProductCard from '../productCard';
import 'swiper/css/bundle';
import './products-slider.scss';

interface Props {
  products: Product[];
}

const ProductsSlider: React.FC<Props> = ({ products }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [products]);

  return (
    <Swiper
      className="products__slider"
      modules={[Navigation, Autoplay]}
      spaceBetween={16}
      slidesPerView="auto"
      navigation
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {products.map(
        ({
          id, itemId, image, price, screen, fullPrice, capacity, ram, name,
        }) => {
          return (
            <SwiperSlide key={id} style={{ width: 'auto' }}>
              <ProductCard
                itemId={itemId}
                imgURL={image}
                price={price}
                screen={screen}
                oldPrice={fullPrice}
                capacity={capacity}
                ram={ram}
                title={name}
              />
            </SwiperSlide>
          );
        },
      )}
    </Swiper>
  );
};

export default ProductsSlider;
