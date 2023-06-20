import React, { PropsWithChildren } from 'react';
import AuthProvider from '../AuthProvider';
import CartProvider from '../CartProvider';
import FavouritesProvider from '../FavouritesProvider';
import ProductsProvider from '../ProductsProvider';

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <AuthProvider>
    <ProductsProvider>
      <CartProvider>
        <FavouritesProvider>{children}</FavouritesProvider>
      </CartProvider>
    </ProductsProvider>
  </AuthProvider>
);

export default AppProvider;
