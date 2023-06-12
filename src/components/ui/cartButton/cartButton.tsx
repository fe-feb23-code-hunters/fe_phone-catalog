import classes from './cartButton.module.scss';

export const CartButton = () => {
  return (
    <button className={classes.cart__button} type="button">
      Add to cart
    </button>
  );
};
