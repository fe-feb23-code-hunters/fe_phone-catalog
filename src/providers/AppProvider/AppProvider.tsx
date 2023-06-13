import React, { PropsWithChildren } from 'react';
import CartProvider from '../CartProvider';
import FavouritesProvider from '../FavouritesProvider/FavouritesProvider';
import ProductsProvider from '../ProductsProvider';

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <ProductsProvider>
    <CartProvider>
      <FavouritesProvider>{children}</FavouritesProvider>
    </CartProvider>
  </ProductsProvider>
);

export default AppProvider;
