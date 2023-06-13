import { FavouriteProduct } from '../types/favourites';

const FAVOURITES_KEY = 'favourites';

const saveFavourites = (favouriteItem: FavouriteProduct[]) => {
  localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favouriteItem));
};

export const getFavourites = (): FavouriteProduct[] => {
  const rawFavourites = localStorage.getItem(FAVOURITES_KEY);

  if (rawFavourites) {
    const favourites = JSON.parse(rawFavourites);

    return favourites;
  }

  return [];
};

export const addToFavourites = (
  productId: string,
): FavouriteProduct | undefined => {
  const favourites = getFavourites();
  const indexOfProduct = favourites.findIndex(
    (product) => product.id === productId,
  );

  let product;

  if (indexOfProduct !== -1) {
    return product;
  }

  product = { id: productId };

  favourites.push(product);

  saveFavourites(favourites);

  return product;
};

export const deleteFromFavourites = (productId: string): boolean => {
  const favourites = getFavourites();

  const indexOfProduct = favourites.findIndex(
    (product) => product.id === productId,
  );

  if (indexOfProduct !== -1) {
    favourites.splice(indexOfProduct, 1);

    saveFavourites(favourites);

    return true;
  }

  return false;
};
