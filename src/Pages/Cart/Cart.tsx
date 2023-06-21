/* eslint-disable max-len */
import { useContext, useEffect, useState } from 'react';
import cn from 'classnames';
import { CartContext } from '../../providers/CartProvider/CartProvider';
import BackButton from '../../components/shared/buttons/BackButton/BackButton';
import classes from './Cart.module.scss';
import Button from '../../components/shared/buttons/Button/Button';
import Modal from '../../components/Modal/Modal';
import { CartItem } from '../../components/CartItem';
import { CartProduct } from '../../types/cart';
import Loader from '../../components/shared/Loader';
import { fetchProductById } from '../../api/products.api';
import { Product } from '../../types/product';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { createOrder } from '../../api/orders.api';
import { EmptyPage } from '../../components/EmptyPage';
import CartIcon from '../../icons/CartIcon';

const {
  grid,
  checkout,
  loader,
  grid__desktop: gridDesktop,
  grid__tablet: gridTablet,
  grid__mobile: gridMobile,
  grid__item: gridItem,
  grid__item__tablet_1_12: gridTabletFullSize,
  grid__item__desktop_17_24: gridDesktopEnd,
  grid__item__mobile_1_4: gridMobileFullSize,
  grid__item__desktop_1_16: gridDesktopStart,
  container,
  title,
  button__back: buttonBack,
  checkout__value: checkoutValue,
  checkout__count: checkoutCount,
  checkout__button: checkoutButton,
} = classes;

const Cart: React.FC = () => {
  const { userId } = useContext(AuthContext);
  const { cart, clearCart } = useContext(CartContext);

  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [isLoginModalShown, setIsLoginModalShown] = useState(false);
  const [isNoProductsModalShown, setIsNoProductsModalShown] = useState(false);
  const [isPromoModalShown, setIsPromoModalShown] = useState(false);

  const goBack = () => {
    window.history.back();
  };

  const cartMap: { [key: string]: CartProduct } = cart.reduce(
    (acc, cartItem) => {
      return { ...acc, [cartItem.id]: cartItem };
    },
    {},
  );

  const handleCheckout = async () => {
    if (!userId) {
      setIsLoginModalShown(true);

      return;
    }

    if (cart.length === 0) {
      setIsNoProductsModalShown(true);

      return;
    }

    const productsIds = cartProducts.map((product) => product.id);

    await createOrder(userId, productsIds);

    setIsPromoModalShown(true);
    clearCart();
  };

  const totalPrice = cartProducts.reduce(
    (accum, { price, itemId }) => accum + price * cartMap[itemId]?.count,
    0,
  );

  const totalCount = cart.reduce((accum, el) => accum + el.count, 0);

  const fetchCartProducts = async () => {
    const fetchedProducts = await Promise.all(
      cart.map(({ id }) => {
        return fetchProductById(id);
      }),
    );

    setCartProducts(fetchedProducts);
    setIsLoading(false);
  };

  useEffect(() => {
    if (cart.length !== cartProducts.length || cartProducts.length === 0) {
      setIsLoading(true);

      fetchCartProducts();
    }
  }, [cart]);

  return (
    <div className={container}>
      <div className={buttonBack}>
        <BackButton onClick={goBack} />
      </div>

      <h1 className={title}>Cart</h1>

      {isLoading && <Loader className={loader} />}

      {!isLoading && (
        <div className={cn(grid, gridMobile, gridTablet, gridDesktop)}>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopStart,
            )}
          >
            {cartProducts.map(({
              id, itemId, name, image, price,
            }) => (
              <CartItem
                key={id}
                itemId={itemId}
                name={name}
                image={image}
                price={price}
                count={cartMap[itemId]?.count}
              />
            ))}

            {cartProducts.length === 0 && (
              <EmptyPage
                pageTitle="Your cart is currently empty!"
                pageText="Before proceed to checkout you must add some products to your shopping cart"
              >
                <CartIcon />
              </EmptyPage>
            )}
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopEnd,
            )}
          >
            <div className={checkout}>
              <h2 className={checkoutValue}>{`$${totalPrice}`}</h2>

              <h3 className={checkoutCount}>
                {`Total for ${totalCount} items`}
              </h3>

              <div className={checkoutButton}>
                <Button
                  label="Checkout"
                  onClick={handleCheckout}
                  height="48px"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <Modal
        title="Log in first"
        buttonLabel="Log in"
        onClose={() => setIsLoginModalShown(false)}
        showModal={isLoginModalShown}
        description="Log into your account to continue shopping"
        navigation="/log-in"
      />

      <Modal
        title="Thank you for your purchase"
        onClose={() => setIsPromoModalShown(false)}
        showModal={isPromoModalShown}
        description="Please enjoy 20% off your next order with promocode: "
        promo="CODEHUNTERS_TOP"
        navigation="/cart"
      />

      <Modal
        title="There is nothing here yet"
        onClose={() => setIsNoProductsModalShown(false)}
        showModal={isNoProductsModalShown}
        description="Please, add some items to the cart"
        navigation="/phones"
      />
    </div>
  );
};

export default Cart;
