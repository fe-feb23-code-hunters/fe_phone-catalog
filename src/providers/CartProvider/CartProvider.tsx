import React, { PropsWithChildren, useEffect, useState } from 'react';
import { CartProduct } from '../../types/cart';
import {
  getCart,
  addToCart as addProduct,
  deleteFromCart as deleteProduct,
} from '../../utils/cart-storage.utils';

interface Context {
  cart: CartProduct[];
  addToCart: (productId: string) => void;
  deleteFromCart: (productId: string) => void;
}

export const CartContext = React.createContext<Context>({
  cart: [],
  addToCart: () => {},
  deleteFromCart: () => {},
});

const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (productId: string) => {
    const product = addProduct(productId);

    setCart((oldCart) => [...oldCart, product]);
  };

  const deleteFromCart = (productId: string) => {
    const isProductDeleted = deleteProduct(productId);

    if (isProductDeleted) {
      setCart((oldCart) => {
        return oldCart.filter((product) => product.id !== productId);
      });
    }
  };

  useEffect(() => {
    const storedCart = getCart();

    setCart(storedCart);
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
