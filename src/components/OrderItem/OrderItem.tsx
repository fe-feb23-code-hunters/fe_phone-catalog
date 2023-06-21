/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import classes from './OrderItem.module.scss';

const {
  card,
  card__section: cardSection,
  'card__product-description': cardProductDescription,
  card__wrapper: cardWrapper,
  'card__photo-container': cardPhotoContainer,
  card__image: cardImage,
  card__count: cardCount,
  card__price: cardPrice,
} = classes;

export const OrderItem = () => {
  return (
    <div className={card}>
      <div className={cardSection}>
        <div className={cardWrapper}>

          <Link to="/" className={cardPhotoContainer}>
            <img
              src="https://scdn.comfy.ua/89fc351a-22e7-41ee-8321-f8a9356ca351/https://cdn.comfy.ua/media/catalog/product/i/p/iphone-14-pro-finish-select-202209-6-1inch-silver_1_.jpg/w_600"
              alt="iPhone"
              className={cardImage}
            />
          </Link>
        </div>

        <Link to="/" className={cardProductDescription}>
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </Link>
      </div>

      <div className={cardSection}>
        <p className={cardCount}>1</p>
        <div className={cardPrice}>$1000</div>
      </div>
    </div>
  );
};
