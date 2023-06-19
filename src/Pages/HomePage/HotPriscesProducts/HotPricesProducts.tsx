import { useEffect, useState } from 'react';
import { Product } from '../../../types/product';
import { fetchProductsWithcDiscount } from '../../../api/products.api';

import ProductsSlider from '../../../components/ProductsSlider';
import Loader from '../../../components/shared/Loader';

import classes from './hot-prices-products.module.scss';

const HotPricesProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [discountProducts, setdiscountProducts] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const fetchDiscount = async () => {
    try {
      const { products } = await fetchProductsWithcDiscount();

      setdiscountProducts(products);
    } catch (err) {
      setError(err as Error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchDiscount();
  }, []);

  return (
    <>
      {isLoading && <Loader className={classes.loader} />}

      {!isLoading && (
        <div className="product__wrapper">
          <h2 className="product-slider__title short__title">Hot prices</h2>

          {error && `Error: ${error}`}

          <ProductsSlider products={discountProducts} />
        </div>
      )}
    </>
  );
};

export default HotPricesProducts;
