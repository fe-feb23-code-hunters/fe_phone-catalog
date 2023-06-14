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

interface Props {
  id: string;
  image: string;
  name: string;
  price: number;
  count: number;
}

export const CartItem: React.FC<Props> = ({
  id, image, name, price, count,
}) => {
  const { deleteFromCart, addToCart, removeFromCart } = useContext(CartContext);

  const showDisabledButton = count <= 1;

  const handleAdd = () => {
    addToCart(id);
  };

  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <div className={container}>
      <div className={card}>
        <div className={CardInfo}>
          <button
            type="button"
            className={CardDeleteButton}
            onClick={() => deleteFromCart(id)}
          >
            <CloseLigth />
          </button>
          <Link to="/">
            <img
              src={`${process.env.REACT_APP_API_PATH}/${image}`}
              alt={image}
              className={CardImg}
            />
          </Link>
          <Link to="/" className={CardProductDescription}>
            {name}
          </Link>
        </div>
        <div className={CardInfo}>
          <div className={CardCounter}>
            <IconsButton onClick={handleRemove} isDisabled={showDisabledButton}>
              <Minus
                className={cn(isDisabledButton, {
                  [isActiveButton]: count > 1,
                })}
              />
            </IconsButton>
            <p className={CardCount}>{count}</p>
            <IconsButton onClick={handleAdd}>
              <Plus />
            </IconsButton>
          </div>
          <p className={CardPrice}>{`$${price * count}`}</p>
        </div>
      </div>
    </div>
  );
};
