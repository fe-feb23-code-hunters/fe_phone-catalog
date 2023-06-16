import { useEffect, useState } from 'react';
import { Product } from '../../../types/product';
import { fetchNewProducts } from '../../../api/products.api';
import classes from './brand-new-products.module.scss';
import ProductCard from '../../../components/productCard/productCard';
import Loader from '../../../components/shared/Loader';

const BrandNewProducts = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
      <div>Brand new products</div>

      {error && `Error: ${error}`}

      {isLoading && <Loader className={classes.loader} />}

      {newProducts.map(
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

export default BrandNewProducts;
