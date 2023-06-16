import { useEffect, useState, useRef } from 'react';
import { Navigation, Autoplay, Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from '../../../types/product';
import { fetchRecommendedProducts } from '../../../api/products.api';
import ProductCard from '../../../components/productCard/productCard';

import 'swiper/css/bundle';
import '../../../styles/productSlider.scss';

const RecommendedProducts = ({ productId }: { productId: string }) => {
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const fetchRecommended = async () => {
    try {
      const { products } = await fetchRecommendedProducts(productId);

      setRecommendedProducts(products);
    } catch (err) {
      setError(err as Error);
    }
  };

  useEffect(() => {
    fetchRecommended();
  }, [productId]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [recommendedProducts]);

  return (
    <div className="product__wrapper">
      <h2 className="product-slider__title">You may also like</h2>
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
        {recommendedProducts.map(
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

export default RecommendedProducts;
