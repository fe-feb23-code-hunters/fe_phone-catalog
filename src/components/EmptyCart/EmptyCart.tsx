/* eslint-disable max-len */
import Cart from '../../icons/CartIcon';
import classes from './EmptyCart.module.scss';

const {
  container,
  cart,
  cart__photo: cartPhoto,
  cart__info: cartInfo,
  cart__title: cartTitle,
  cart__text: cartText,
} = classes;

export const EmptyCart = () => {
  return (
    <div className={container}>
      <div className={cart}>
        <Cart className={cartPhoto} />
      </div>
      <div className={cartInfo}>
        <h2 className={cartTitle}>
          Your cart is currently empty
        </h2>
        <p className={cartText}>
          Before proceed to checkout you must add some products to your shopping cart
        </p>
      </div>
    </div>
  );
};
