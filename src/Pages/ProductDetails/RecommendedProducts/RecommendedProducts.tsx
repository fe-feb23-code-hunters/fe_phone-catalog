import { useEffect, useState } from 'react';
import { Product } from '../../../types/product';
import { fetchRecommendedProducts } from '../../../api/products.api';

import ProductsSlider from '../../../components/ProductsSlider';
import Loader from '../../../components/shared/Loader';
import classes from './recommended-products.module.scss';

interface Props {
  productId?: string;
}

const RecommendedProducts: React.FC<Props> = ({ productId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const fetchRecommended = async () => {
    try {
      if (productId) {
        const { products } = await fetchRecommendedProducts(productId);

        setRecommendedProducts(products);
      }
    } catch (err) {
      setError(err as Error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchRecommended();
  }, [productId]);

  return (
    <div className="product__wrapper">
      <h2 className="product-slider__title">You may also like</h2>

      {isLoading && <Loader className={classes.loader} />}

      {error && `Error: ${error}`}

      <ProductsSlider products={recommendedProducts} />
    </div>
  );
};

export default RecommendedProducts;
