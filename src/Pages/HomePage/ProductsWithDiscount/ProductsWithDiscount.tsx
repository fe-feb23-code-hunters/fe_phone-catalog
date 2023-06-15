import { useEffect, useState } from 'react';
import { Product } from '../../../types/product';
import { fetchProductsWithcDiscount } from '../../../api/products.api';
import ProductCard from '../../../components/productCard/productCard';

const ProductsWithDiscount = () => {
  const [discountedProducts, setDiscountedProducts] = useState<Product[]>([]);

  const [error, setError] = useState<Error | null>(null);

  const fetchDiscounted = async () => {
    try {
      const { products } = await fetchProductsWithcDiscount();

      setDiscountedProducts(products);
    } catch (err) {
      setError(err as Error);
    }
  };

  useEffect(() => {
    fetchDiscounted();
  }, []);

  return (
    <>
      <div>Hot prices</div>

      {error && `Error: ${error}`}
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
