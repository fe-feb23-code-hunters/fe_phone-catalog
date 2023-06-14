/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { CartContext } from '../../providers/CartProvider/CartProvider';
import IconsButton from '../shared/buttons/IconButton/IconButton';
import Minus from '../../icons/Minus/Minus';
import Plus from '../../icons/Plus';
import classes from './CartItem.module.scss';
import CloseLigth from '../../icons/CloseLight/CloseLight';

const {
  card,
  card__image: CardImg,
  card__info: CardInfo,
  card__counter: CardCounter,
  card__count: CardCount,
  'card__product-description': CardProductDescription,
  card__price: CardPrice,
  'card__delete-button': CardDeleteButton,
  container,
  'is-disabled-button': isDisabledButton,
  'is-active-button': isActiveButton,
} = classes;

// delete when change count will be ready
const handleClick = () => { };

export const CartItem = () => {
  const { deleteFromCart } = useContext(CartContext);

  // delete when the product will be accessible
  const count = 1;

  const showDisabledButton = count <= 1;

  return (
    <div className={container}>
      <div className={card}>
        <div className={CardInfo}>
          <button
            type="button"
            className={CardDeleteButton}
            // add productId deleteFromCart(productId)
            onClick={() => deleteFromCart}
          >
            <CloseLigth />
          </button>
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/img/products/iPhone-11-pro-max-gold/iPhone_11_Pro_Max_Gold_front.jpeg`}
              alt=""
              className={CardImg}
            />
          </Link>
          <Link to="/" className={CardProductDescription}>
            Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
          </Link>
        </div>
        <div className={CardInfo}>
          <div className={CardCounter}>
            <IconsButton onClick={handleClick} isDisabled={showDisabledButton}>
              <Minus className={cn(isDisabledButton, {
                [isActiveButton]: count > 1,
              })}
              />
            </IconsButton>
            <p className={CardCount}>
              {count}
            </p>
            <IconsButton onClick={handleClick}>
              <Plus />
            </IconsButton>
          </div>
          <p className={CardPrice}>$1099</p>
        </div>
      </div>
    </div>
  );
};
