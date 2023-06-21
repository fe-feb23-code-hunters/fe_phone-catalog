/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import classes from './OrderItem.module.scss';

const {
  card,
  'card__section-image': cardSectionImage,
  'card__section-price': cardSectionPrice,
  'card__product-description': cardProductDescription,
  card__wrapper: cardWrapper,
  'card__photo-container': cardPhotoContainer,
  card__image: cardImage,
  card__count: cardCount,
  card__price: cardPrice,
} = classes;

interface Props {
  product: Product;
}

export const OrderItem: React.FC<Props> = ({ product }) => {
  const count = product.ProductOrder?.count || 1;

  return (
    <div className={card}>
      <div className={cardSectionImage}>
        <div className={cardWrapper}>
          <Link to={`/phones/${product.itemId}`} className={cardPhotoContainer}>
            <img
              src={`${process.env.REACT_APP_API_PATH}/${product.image}`}
              alt={product.name}
              className={cardImage}
            />
          </Link>
        </div>

        <Link
          to={`/phones/${product.itemId}`}
          className={cardProductDescription}
        >
          {product.name}
        </Link>
      </div>

      <div className={cardSectionPrice}>
        <p className={cardCount}>
          {`${count} ${count > 1 ? 'items' : 'item'}`}
        </p>
        <div className={cardPrice}>{`$${product.price * count}`}</div>
      </div>
    </div>
  );
};
