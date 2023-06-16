import { useEffect, useState, useRef } from 'react';
import { Navigation, Autoplay, Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from '../../../types/product';
import { fetchNewProducts } from '../../../api/products.api';
import ProductCard from '../../../components/productCard/productCard';

import 'swiper/css/bundle';
import '../../../styles/productSlider.scss';

const BrandNewProducts = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const fetchNew = async () => {
    try {
      const { products } = await fetchNewProducts();

      setNewProducts(products);
    } catch (err) {
      setError(err as Error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchNew();
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [newProducts]);

  return (
    <div className="product__wrapper">
      <h2 className="product-slider__title">Brand new models</h2>
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
        {newProducts.map(
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

export default BrandNewProducts;
