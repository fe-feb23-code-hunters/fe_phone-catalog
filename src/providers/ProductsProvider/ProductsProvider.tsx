import React, { PropsWithChildren, useEffect, useState } from 'react';
import { fetchAllProducts } from '../../api/products.api';
import { Product } from '../../types/product';

interface Context {
  products: Product[];
}

export const ProductsContext = React.createContext<Context>({ products: [] });

const ProductsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const setupProducts = async () => {
    const { products: fetchedProducts } = await fetchAllProducts();

    setProducts(fetchedProducts);
  };

  useEffect(() => {
    setupProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
