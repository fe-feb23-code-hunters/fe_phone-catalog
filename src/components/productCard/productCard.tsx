import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './product-card.module.scss';
import Button from '../shared/buttons/Button';
import LikeButton from '../shared/buttons/LikeButton';
import { CartContext } from '../../providers/CartProvider/CartProvider';
// eslint-disable-next-line max-len
import { FavouritesContext } from '../../providers/FavouritesProvider/FavouritesProvider';

interface Props {
  id: string;
  imgURL: string;
  price: number;
  screen: string;
  oldPrice: number;
  capacity: number;
  ram: number;
  title: string;
}

const ProductCard: React.FC<Props> = ({
  id,
  imgURL,
  price,
  oldPrice,
  screen,
  capacity,
  ram,
  title,
}) => {
  const { cart, addToCart, deleteFromCart } = useContext(CartContext);
  const {
    favourites,
    addToFavourites,
    deleteFromFavourites,
  } = useContext(FavouritesContext);

  const doesExistInCart = cart.findIndex((product) => product.id === id) !== -1;

  const doesExistInFavourites = favourites.findIndex(
    (product) => product.id === id,
  ) !== -1;

  const buttonLabel = doesExistInCart ? 'Added' : 'Add to cart';

  const handleAddToCart = () => {
    if (doesExistInCart) {
      deleteFromCart(id);
    } else {
      addToCart(id);
    }
  };

  const handleAddToFavourites = () => {
    if (doesExistInFavourites) {
      deleteFromFavourites(id);
    } else {
      addToFavourites(id);
    }
  };

  return (
    <Link to={`/phones/${id}`} className={classes.card}>
      <div className={classes.card__wrapper}>
        <img
          className={classes.card__image}
          src={`${process.env.PUBLIC_URL}${imgURL}`}
          alt="phone"
        />
        <h2 className={classes.card__title}>{title}</h2>
        <div className={classes.card__price__wrapper}>
          <h3 className={classes.card__price}>{`$${price}`}</h3>
          <h3 className={classes.card__price__old}>{`$${oldPrice}`}</h3>
        </div>
        <div className={classes.card__specification__wrapper}>
          <p className={classes.card__specification__title}>Screen</p>
          <p className={classes.card__specification__value}>{screen}</p>
        </div>
        <div className={classes.card__specification__wrapper}>
          <p className={classes.card__specification__title}>Capacity</p>
          <p className={classes.card__specification__value}>
            {`${capacity}GB`}
          </p>
        </div>
        <div className={classes.card__specification__wrapper}>
          <p className={classes.card__specification__title}>RAM</p>
          <p className={classes.card__specification__value}>{`${ram}GB`}</p>
        </div>
        <div className={classes.card__specification__buttons}>
          <Button
            label={buttonLabel}
            onClick={handleAddToCart}
            isSelected={doesExistInCart}
          />
          <LikeButton
            onClick={handleAddToFavourites}
            isSelected={doesExistInFavourites}
          />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
