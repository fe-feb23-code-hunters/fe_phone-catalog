import React, { PropsWithChildren, useEffect, useState } from 'react';
import { fetchAllProducts } from '../../api/products.api';
import { Product } from '../../types/product';
import { SortBy } from '../../types/sortBy';

interface Context {
  products: Product[];
  isLoading: boolean;
  handleSortByChange: (newSortBy: SortBy) => void;
  sortBy: SortBy;
  quantity: number;
  handleQuantityChange: (number: number) => void;
}

export const ProductsContext = React.createContext<Context>({
  products: [],
  isLoading: false,
  handleSortByChange: () => {},
  sortBy: SortBy.NEWEST,
  quantity: 16,
  handleQuantityChange: () => {},
});

const ProductsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);

  const [sortBy, setSortby] = useState(SortBy.NEWEST);

  const [quantity, setQuantity] = useState(16);

  const setupProducts = async () => {
    const { products: fetchedProducts }
    = await fetchAllProducts(
      sortBy,
      quantity,
    );

    setProducts(fetchedProducts);
    setIsLoading(false);
  };

  const handleSortByChange = (newSortBy: SortBy) => {
    setSortby(newSortBy);
  };

  const handleQuantityChange = (number: number) => {
    setQuantity(number);
  };

  useEffect(() => {
    setIsLoading(true);
    setupProducts();
  }, [sortBy, quantity]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        handleSortByChange,
        sortBy,
        quantity,
        handleQuantityChange,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
