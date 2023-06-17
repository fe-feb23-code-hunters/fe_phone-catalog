import { useEffect, useState } from 'react';
import { Product } from '../../../types/product';
import { fetchRecommendedProducts } from '../../../api/products.api';

import ProductsSlider from '../../../components/ProductsSlider';

interface Props {
  productId?: string;
}

const RecommendedProducts: React.FC<Props> = ({ productId }) => {
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
  };

  useEffect(() => {
    fetchRecommended();
  }, [productId]);

  return (
    <div className="product__wrapper">
      <h2 className="product-slider__title">You may also like</h2>

      {error && `Error: ${error}`}

      <ProductsSlider products={recommendedProducts} />
    </div>
  );
};

export default RecommendedProducts;
