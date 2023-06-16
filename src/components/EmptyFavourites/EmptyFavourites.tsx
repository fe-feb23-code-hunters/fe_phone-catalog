/* eslint-disable max-len */
import HeartOff from '../../icons/HeartOff/HeartOff';
import classes from './EmptyFavourites.module.scss';

const {
  container,
  favourites,
  favourites__photo: favouritesPhoto,
  favourites__info: favouritesInfo,
  favourites__title: favouritesTitle,
  favourites__text: favouritesText,
} = classes;

export const EmptyFavourites = () => {
  return (
    <div className={container}>
      <div className={favourites}>
        <HeartOff className={favouritesPhoto} />
      </div>
      <div className={favouritesInfo}>
        <h2 className={favouritesTitle}>
          No favourites yet!
        </h2>
        <p className={favouritesText}>
          Save your favourite products, you will find them collected here waiting for you!
        </p>
      </div>
    </div>
  );
};
