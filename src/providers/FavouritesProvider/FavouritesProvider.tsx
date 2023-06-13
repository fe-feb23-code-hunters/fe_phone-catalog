import React, { PropsWithChildren, useEffect, useState } from 'react';
import { FavouriteProduct } from '../../types/favourites';
import {
  getFavourites,
  addToFavourites as addProduct,
  deleteFromFavourites as deleteProduct,
} from '../../utils/favourites-storage.utils';

interface Context {
  favourites: FavouriteProduct[];
  addToFavourites: (productId: string) => void;
  deleteFromFavourites: (productId: string) => void;
}

export const FavouritesContext = React.createContext<Context>({
  favourites: [],
  addToFavourites: () => {},
  deleteFromFavourites: () => {},
});

const FavouritesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [favourites, setFavourites] = useState<FavouriteProduct[]>([]);

  const addToFavourites = (productId: string) => {
    const product = addProduct(productId);

    if (product) {
      setFavourites((oldFavourites) => [...oldFavourites, product]);
    }
  };

  const deleteFromFavourites = (productId: string) => {
    const isProductDeleted = deleteProduct(productId);

    if (isProductDeleted) {
      setFavourites((oldFavourites) => {
        return oldFavourites.filter((product) => product.id !== productId);
      });
    }
  };

  useEffect(() => {
    const storedFavourites = getFavourites();

    setFavourites(storedFavourites);
  }, []);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, deleteFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;
