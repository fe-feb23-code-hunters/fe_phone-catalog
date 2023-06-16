import React, { PropsWithChildren, useEffect, useState } from 'react';
import { fetchAllProducts } from '../../api/products.api';
import { Product } from '../../types/product';

interface Context {
  products: Product[];
  isLoading: boolean;
}

export const ProductsContext = React.createContext<Context>({
  products: [],
  isLoading: false,
});

const ProductsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);

  const setupProducts = async () => {
    const { products: fetchedProducts } = await fetchAllProducts();

    setProducts(fetchedProducts);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setupProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
