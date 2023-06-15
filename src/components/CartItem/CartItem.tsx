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
  container,
  card,
  card__section: cardSection,
  'card__delete-button': cardDeleteButton,
  'card__product-description': cardProductDescription,
  card__wrapper: cardWrapper,
  'card__photo-container': cardPhotoContainer,
  card__image: cardImage,
  card__counter: cardCounter,
  card__count: cardCount,
  card__price: cardPrice,
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
        <div className={cardSection}>
          <div className={cardWrapper}>
            <button
              type="button"
              className={cardDeleteButton}
              onClick={() => deleteFromCart(id)}
            >
              <CloseLigth />
            </button>

            <Link to="/" className={cardPhotoContainer}>
              <img
                src={`${process.env.REACT_APP_API_PATH}/${image}`}
                alt={image}
                className={cardImage}
              />
            </Link>
          </div>

          <Link
            to="/"
            className={cardProductDescription}
          >
            {name}
          </Link>
        </div>

        <div className={cardSection}>
          <div className={cardCounter}>
            <IconsButton onClick={handleRemove} isDisabled={showDisabledButton}>
              <Minus
                className={cn(isDisabledButton, {
                  [isActiveButton]: count > 1,
                })}
              />
            </IconsButton>

            <p className={cardCount}>{count}</p>

            <IconsButton onClick={handleAdd}>
              <Plus />
            </IconsButton>
          </div>

          <div className={cardPrice}>
            {`$${price * count}`}
          </div>
        </div>
      </div>
    </div>
  );
};
