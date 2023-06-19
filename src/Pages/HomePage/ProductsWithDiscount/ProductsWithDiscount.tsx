import { useEffect, useState } from 'react';
import { Product } from '../../../types/product';
import { fetchProductsWithcDiscount } from '../../../api/products.api';
import ProductCard from '../../../components/productCard/productCard';
import Loader from '../../../components/shared/Loader';
import classes from './products-with-discount.module.scss';

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

      {isLoading && <Loader className={classes.loader} />}

      {discountedProducts.map(
        ({
          id, image, price, screen, fullPrice, capacity, ram, name,
        }) => {
          return (
            <ProductCard
              key={id}
              itemId={id}
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

export default ProductsWithDiscount;
