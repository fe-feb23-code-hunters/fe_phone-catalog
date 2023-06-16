import { useEffect, useState } from 'react';
import { Product } from '../../../types/product';
import { fetchProductsWithcDiscount } from '../../../api/products.api';
import ProductCard from '../../../components/productCard/productCard';
import Loader from '../../../components/shared/Loader';

const ProductsWithDiscount = () => {
  const [discountedProducts, setDiscountedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState<Error | null>(null);

  const fetchDiscounted = async () => {
    try {
      const { products } = await fetchProductsWithcDiscount();

      setDiscountedProducts(products);
    } catch (err) {
      setError(err as Error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchDiscounted();
  }, []);

  return (
    <>
      <div>Hot prices</div>

      {error && `Error: ${error}`}

      {isLoading && <Loader />}

      {discountedProducts.map(
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
              capacity={capacity}
              ram={ram}
              title={name}
            />
          );
        },
      )}
    </>
  );
};

export default ProductsWithDiscount;
