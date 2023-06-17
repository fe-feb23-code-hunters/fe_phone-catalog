import React, { PropsWithChildren, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchAllProducts } from '../../api/products.api';
import { Product } from '../../types/product';
import { SortBy } from '../../types/sortBy';
import { getSearchParams } from '../../utils/get-search-params';

interface Context {
  products: Product[];
  isLoading: boolean;
  handleSortByChange: (newSortBy: SortBy) => void;
  sortBy: SortBy;
  handleLimitChange: (number: number) => void;
  limit: number;
  handlePageChange: (pageNumber: number) => void;
  page: number;
  totalPages: number;
}

export const ProductsContext = React.createContext<Context>({
  products: [],
  isLoading: false,
  handleSortByChange: () => {},
  sortBy: SortBy.NEWEST,
  handleLimitChange: () => {},
  limit: 16,
  handlePageChange: () => {},
  page: 1,
  totalPages: 5,
});

const ProductsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page') || 1);
  const sortBy = (searchParams.get('sortBy') || SortBy.NEWEST) as SortBy;
  const limit = Number(searchParams.get('limit') || 16);

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState(5);

  const setupProducts = async () => {
    const { products: fetchedProducts, totalPages: fetchedtotalPages }
      = await fetchAllProducts(page, sortBy, limit);

    setProducts(fetchedProducts);
    setTotalPages(fetchedtotalPages);
    setIsLoading(false);
  };

  const handleSortByChange = (newSortBy: SortBy) => {
    setSearchParams(
      getSearchParams(searchParams, { sortBy: newSortBy, page: '1' }),
    );
  };

  const handleLimitChange = (number: number) => {
    setSearchParams(
      getSearchParams(searchParams, { limit: String(number), page: '1' }),
    );
  };

  const handlePageChange = (pageNumber: number) => {
    setSearchParams(
      getSearchParams(searchParams, { page: String(pageNumber) }),
    );
  };

  useEffect(() => {
    setIsLoading(true);
    setupProducts();
  }, [sortBy, limit, page]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        handleSortByChange,
        sortBy,
        handleLimitChange,
        limit,
        handlePageChange,
        page,
        totalPages,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
