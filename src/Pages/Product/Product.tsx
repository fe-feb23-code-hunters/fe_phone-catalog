import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../../api/products.api';

const Product: React.FC = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState<null | Error>(null);

  const fetchProduct = async () => {
    try {
      if (productId) {
        const fetchedProduct = await fetchProductById(productId);

        setProduct(fetchedProduct);
      }
    } catch (err: any) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return (
    <div>
      <h1>Product</h1>

      {JSON.stringify(product)}
      {error && `Error: ${error}`}
    </div>
  );
};

export default Product;
