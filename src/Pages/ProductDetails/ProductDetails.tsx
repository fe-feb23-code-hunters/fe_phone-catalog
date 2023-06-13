import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../api/products.api';
import { Product } from '../../types/product';

const ProductDetails: React.FC = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
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

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return (
    <div>
      <h1>Product</h1>

      {product?.name}
      {error && `Error: ${error}`}
    </div>
  );
};

export default ProductDetails;
