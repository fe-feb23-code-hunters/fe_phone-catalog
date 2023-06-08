import React from 'react';
import style from './productCard.module.scss';

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
    <div className={style.card}>
      <div className={style.card__wrapper}>
        <img
          className={style.card__image}
          src={imgURL}
          alt="phone"
        />
        <h2 className={style.card__title}>
          {title}
        </h2>
        <div className={style.card__price__wrapper}>
          <h3 className={style.card__price}>{`$${price}`}</h3>
          <h3 className={style.card__price__old}>{`$${oldPrice}`}</h3>
        </div>
        <div className={style.card__specification__wrapper}>
          <p className={style.card__specification__title}>Screen</p>
          <p className={style.card__specification__value}>{screen}</p>
        </div>
        <div className={style.card__specification__wrapper}>
          <p className={style.card__specification__title}>Capacity</p>
          <p className={style.card__specification__value}>{`${capacity}GB`}</p>
        </div>
        <div className={style.card__specification__wrapper}>
          <p className={style.card__specification__title}>RAM</p>
          <p className={style.card__specification__value}>{`${ram}GB`}</p>
        </div>
        <div className={style.card__buttons}>
          <button className={style.card__buttons__cart} type="button">
            Add to cart
          </button>
          <div
            className={style.card__buttons__favorite}
          />
        </div>
      </div>
    </div>
  );
};
