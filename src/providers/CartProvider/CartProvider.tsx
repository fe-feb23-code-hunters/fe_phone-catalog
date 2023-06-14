import React, { PropsWithChildren, useEffect, useState } from 'react';
import { CartProduct } from '../../types/cart';
import {
  getCart,
  addToCart as addProduct,
  deleteFromCart as deleteProduct,
  removeFromCart as removeProduct,
} from '../../utils/cart-storage.utils';

interface Context {
  cart: CartProduct[];
  addToCart: (productId: string) => void;
  deleteFromCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
}

export const CartContext = React.createContext<Context>({
  cart: [],
  addToCart: () => {},
  deleteFromCart: () => {},
  removeFromCart: () => {},
});

const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (productId: string) => {
    const product = addProduct(productId);

    setCart((oldCart) => {
      const indexOfProduct = oldCart.findIndex((p) => p.id === product.id);

      if (indexOfProduct === -1) {
        return [...oldCart, product];
      }

      const copyCart = [...oldCart];

      copyCart[indexOfProduct] = product;

      return copyCart;
    });
  };

  const deleteFromCart = (productId: string) => {
    const isProductDeleted = deleteProduct(productId);

    if (isProductDeleted) {
      setCart((oldCart) => {
        return oldCart.filter((product) => product.id !== productId);
      });
    }
  };

  const removeFromCart = (productId: string) => {
    const product = removeProduct(productId);

    if (product) {
      setCart((oldCart) => {
        const indexOfProduct = oldCart.findIndex((p) => p.id === product.id);

        if (indexOfProduct === -1) {
          return [...oldCart, product];
        }

        const copyCart = [...oldCart];

        copyCart[indexOfProduct] = product;

        return copyCart;
      });
    }
  };

  useEffect(() => {
    const storedCart = getCart();

    setCart(storedCart);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart, addToCart, removeFromCart, deleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
