import React, { PropsWithChildren } from 'react';
import CartProvider from '../CartProvider';
import ProductsProvider from '../ProductsProvider';

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <ProductsProvider>
    <CartProvider>{children}</CartProvider>
  </ProductsProvider>
);

export default AppProvider;
