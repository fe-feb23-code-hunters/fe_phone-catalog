import React from 'react';
import classes from './productCard.module.scss';
import HeartOutlined from '../../icons/HeartOutlined/HeartOutlined';
import { CartButton } from '../ui/cartButton/cartButton';

type Props = {
  imgURL: string,
  price: number,
  screen: string,
  oldPrice: number,
  capacity: number,
  ram: number,
  title: string,
};

export const ProductCard: React.FC<Props> = ({
  imgURL,
  price,
  oldPrice,
  screen,
  capacity,
  ram,
  title,
}) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__wrapper}>
        <img
          className={classes.card__image}
          src={`${process.env.PUBLIC_URL}${imgURL}`}
          alt="phone"
        />
        <h2 className={classes.card__title}>
          {title}
        </h2>
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
          <p className={classes.card__specification__value}>{`${capacity}GB`}</p>
        </div>
        <div className={classes.card__specification__wrapper}>
          <p className={classes.card__specification__title}>RAM</p>
          <p className={classes.card__specification__value}>{`${ram}GB`}</p>
        </div>
        <div className={classes.card__buttons}>
          <CartButton />
          <div
            className={classes.card__buttons__favorite}
          >
            <HeartOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};
