import { CartProduct } from '../types/cart';

const CART_KEY = 'cart';

const saveCart = (cart: CartProduct[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const getCart = (): CartProduct[] => {
  const rawCart = localStorage.getItem('cart');

  if (rawCart) {
    const cart = JSON.parse(rawCart);

    return cart;
  }

  return [];
};

export const addToCart = (productId: string): CartProduct => {
  const cart = getCart();
  const indexOfProduct = cart.findIndex((product) => product.id === productId);

  let product;

  if (indexOfProduct !== -1) {
    product = cart[indexOfProduct];

    product.count += 1;
  } else {
    product = { id: productId, count: 1 };

    cart.push(product);
  }

  saveCart(cart);

  return product;
};

export const deleteFromCart = (productId: string): boolean => {
  const cart = getCart();

  const indexOfProduct = cart.findIndex((product) => product.id === productId);

  if (indexOfProduct !== -1) {
    cart.splice(indexOfProduct, 1);

    saveCart(cart);

    return true;
  }

  return false;
};

export const removeFromCart = (productId: string): CartProduct | undefined => {
  const cart = getCart();
  const indexOfProduct = cart.findIndex((product) => product.id === productId);

  if (indexOfProduct === -1) {
    return;
  }

  const product = cart[indexOfProduct];

  if (product.count >= 1) {
    product.count -= 1;

    saveCart(cart);

    // eslint-disable-next-line consistent-return
    return product;
  }

  deleteFromCart(productId);
};

export const clearCart = () => {
  saveCart([]);
};
