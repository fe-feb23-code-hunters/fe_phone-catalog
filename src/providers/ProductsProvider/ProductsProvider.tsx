import React, { PropsWithChildren, useEffect, useState } from 'react';
import { fetchAllProducts } from '../../api/products.api';

export const ProductsContext = React.createContext({ products: [] });

const ProductsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [products, setProducts] = useState([]);

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
