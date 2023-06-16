import { useEffect, useState, useRef } from 'react';
import { Navigation, Autoplay, Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from '../../../types/product';
import { fetchProductsWithcDiscount } from '../../../api/products.api';
import ProductCard from '../../../components/productCard/productCard';

import 'swiper/css/bundle';
import '../../../styles/productSlider.scss';

const HotPricesProducts = () => {
  const [discountProducts, setdiscountProducts] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const fetchDiscount = async () => {
    try {
      const { products } = await fetchProductsWithcDiscount();

      setdiscountProducts(products);
    } catch (err) {
      setError(err as Error);
    }
  };

  useEffect(() => {
    fetchDiscount();
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [discountProducts]);

  return (
    <div className="product__wrapper">
      <h2 className="product-slider__title">Hot prices</h2>
      <Swiper
        className="product__swiper"
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView="auto"
        navigation
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {error && `Error: ${error}`}
        {discountProducts.map(
          ({
            id, image, price, screen, fullPrice, capacity, ram, name,
          }) => {
            return (
              <SwiperSlide key={id} style={{ width: 'auto' }}>
                <ProductCard
                  id={id}
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
    </div>
  );
};

export default HotPricesProducts;
