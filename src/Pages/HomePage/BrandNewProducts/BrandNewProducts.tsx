import { useEffect, useState } from 'react';
import { Product } from '../../../types/product';
import { fetchNewProducts } from '../../../api/products.api';

import Loader from '../../../components/shared/Loader';
import classes from './brand-new-products.module.scss';
import ProductsSlider from '../../../components/ProductsSlider';

const BrandNewProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);

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

  return (
    <>
      {isLoading && <Loader className={classes.loader} />}

      {!isLoading && (
        <div className="product__wrapper">
          <h2 className="product-slider__title">Brand new models</h2>

          {error && `Error: ${error}`}

          <ProductsSlider products={newProducts} />
        </div>
      )}
    </>
  );
};

export default BrandNewProducts;
