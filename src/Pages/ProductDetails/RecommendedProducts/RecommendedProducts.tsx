import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../../../types/product';
import { fetchRecommendedProducts } from '../../../api/products.api';
import ProductCard from '../../../components/productCard/productCard';

const RecommendedProducts = () => {
  const { productId } = useParams();

  // eslint-disable-next-line max-len
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
    <>
      <div>Recommended Products</div>

      {error && `Error: ${error}`}
      {recommendedProducts.map(
        ({
          id, image, price, screen, fullPrice, capacity, ram, name,
        }) => {
          return (
            <ProductCard
              key={id}
              id={id}
              imgURL={image}
              price={price}
              screen={screen}
              oldPrice={fullPrice}
              capacity={String(capacity)}
              ram={ram}
              title={name}
            />
          );
        },
      )}
    </>
  );
};

export default RecommendedProducts;
