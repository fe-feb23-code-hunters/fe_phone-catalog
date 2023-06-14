import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchProductById,
  fetchRecommendedProducts,
} from '../../api/products.api';
import { Product } from '../../types/product';

const ProductDetails: React.FC = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  // eslint-disable-next-line max-len
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  const [error, setError] = useState<Error | null>(null);

  const fetchProduct = async () => {
    try {
      if (productId) {
        const fetchedProduct = await fetchProductById(productId);

        setProduct(fetchedProduct);
      }
    } catch (err) {
      setError(err as Error);
    }
  };

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
    fetchProduct();
    fetchRecommended();
  }, [productId]);

  return (
    <div>
      <h1>Product</h1>

      {product?.name}
      {error && `Error: ${error}`}
      {recommendedProducts.map(recommendedProduct => {
        return <h1 key={recommendedProduct.id}>{recommendedProduct.name}</h1>;
      })}
    </div>
  );
};

export default ProductDetails;
