/* eslint-disable max-len */
import { useContext, useState } from 'react';
import cn from 'classnames';
import { CartContext } from '../../providers/CartProvider/CartProvider';
import BackButton from '../../components/shared/buttons/BackButton/BackButton';
import classes from './Cart.module.scss';
import Button from '../../components/shared/buttons/Button/Button';
import Modal from '../../components/Modal/Modal';
import { CartItem } from '../../components/CartItem';
import { ProductsContext } from '../../providers/ProductsProvider/ProductsProvider';
import { CartProduct } from '../../types/cart';

const {
  grid,
  checkout,
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
  const { cart } = useContext(CartContext);
  const { products } = useContext(ProductsContext);
  const [showModal, setShowModal] = useState(false);

  const goBack = () => {
    window.history.back();
  };

  const cartMap: { [key: string]: CartProduct } = cart.reduce(
    (acc, cartItem) => {
      return { ...acc, [cartItem.id]: cartItem };
    },
    {},
  );

  const cartProducts = products.filter(
    (currentProduct) => cartMap[currentProduct.id],
  );

  const totalPrice = cartProducts.reduce(
    (accum, { price, id }) => accum + price * cartMap[id].count,
    0,
  );

  const totalCount = cart.reduce((accum, { count }) => accum + count, 0);

  const isModal = totalPrice === 0;

  return (
    <div className={container}>
      <div className={buttonBack}>
        <BackButton onClick={goBack} />
      </div>
      <h1 className={title}>Cart</h1>
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
            id, name, image, price,
          }) => (
            <CartItem
              key={id}
              id={id}
              name={name}
              image={image}
              price={price}
              count={cartMap[id].count}
            />
          ))}
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
                onClick={() => setShowModal(true)}
                height="48px"
              />
            </div>
          </div>
        </div>
      </div>
      {!isModal && (
        <Modal
          title="Thank you for your purchase"
          onClose={() => setShowModal(false)}
          showModal={showModal}
          description="Please enjoy 20% off your next order with promocode: "
          promo="CODEHUNTERS_TOP"
          navigation="/"
        />
      )}
      {isModal && (
        <Modal
          title="There is nothing here yet"
          onClose={() => setShowModal(false)}
          showModal={showModal}
          description="Please, add some items to the cart"
          navigation="/phones"
        />
      )}
    </div>
  );
};

export default Cart;
