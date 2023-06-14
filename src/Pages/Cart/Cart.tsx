/* eslint-disable max-len */
import { useContext, useState } from 'react';
import cn from 'classnames';
import { CartContext } from '../../providers/CartProvider/CartProvider';
import BackButton from '../../components/shared/buttons/BackButton/BackButton';
import classes from './Cart.module.scss';
import Button from '../../components/shared/buttons/Button/Button';
import Modal from '../../components/Modal/Modal';
import { CartItem } from '../../components/CartItem';

const Cart: React.FC = () => {
  const { cart, deleteFromCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const goBack = () => {
    window.history.back();
  };

  const value = cart.reduce((accum, product) => accum + product.count, 0);

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

  return (
    <div className={container}>
      {cart.map((product) => (
        <div key={product.id}>
          {`
            id: ${product.id}
            count: ${product.count}
          `}

          <button type="button" onClick={() => deleteFromCart(product.id)}>
            Delete from cart
          </button>
        </div>
      ))}
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
          <CartItem />
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
            <h2 className={checkoutValue}>{`$${value}`}</h2>
            <h3 className={checkoutCount}>
              {`Total for ${cart.length} items`}
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
      <Modal
        title="Thank you for your purchase"
        onClose={() => setShowModal(false)}
        showModal={showModal}
        description="Please enjoy 20% off your next order with promocode: "
      />
    </div>
  );
};

export default Cart;
