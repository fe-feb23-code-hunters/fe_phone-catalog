import { useEffect, useState } from 'react';
import { Product } from '../../../types/product';
import { fetchNewProducts } from '../../../api/products.api';
import ProductCard from '../../../components/productCard/productCard';

const BrandNewProducts = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);

  const [error, setError] = useState<Error | null>(null);

  const fetchNew = async () => {
    try {
      const { products } = await fetchNewProducts();

      setNewProducts(products);
    } catch (err) {
      setError(err as Error);
    }
  };

  useEffect(() => {
    fetchNew();
  }, []);

  return (
    <>
      <div>Brand new products</div>

      {error && `Error: ${error}`}
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

export default BrandNewProducts;
