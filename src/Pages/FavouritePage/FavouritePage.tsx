import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
// eslint-disable-next-line max-len
import { FavouritesContext } from '../../providers/FavouritesProvider/FavouritesProvider';
import ForwardButton from '../../components/shared/buttons/ForwardButton';
import Home from '../../icons/Home';
import classes from './FavouritePage.module.scss';
import ProductCard from '../../components/productCard';
import { FavouriteProduct } from '../../types/favourites';
import { EmptyFavourites } from '../../components/EmptyFavourites';
import Loader from '../../components/shared/Loader';
import { Product } from '../../types/product';
import { fetchProductById } from '../../api/products.api';

const {
  grid,
  icon,
  container,
  title,
  text,
  catalog,
  loader,
  grid__desktop: gridDesktop,
  grid__tablet: gridTablet,
  grid__mobile: gridMobile,
  grid__item: gridItem,
  grid__item__mobile_1_4: gridMobileFullSize,
  grid__item__tablet_1_12: gridTabletFullSize,
  grid__item__desktop_1_24: gridDesktopFullSize,
  container__margin_text: textMargin,
  section__margin: sectionMargin,
  container__center: containerCenter,
  container__top: containerTop,
  icon__history: iconHistory,
} = classes;

const FavouritePage: React.FC = () => {
  const { favourites, query } = useContext(FavouritesContext);
  const [favouriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const favouritesMap: { [key: string]: FavouriteProduct } = favourites.reduce(
    (acc, cartItem) => {
      return { ...acc, [cartItem.id]: cartItem };
    },
    {},
  );

  const favouritesProducts = favouriteProducts.filter((currentProduct) => {
    return (
      favouritesMap[currentProduct.itemId]
      && currentProduct.name.toLowerCase().includes(query.toLowerCase())
    );
  });

  const fetchFavoriteProducts = async () => {
    const fetchedProducts = await Promise.all(
      favourites.map(({ id }) => {
        return fetchProductById(id);
      }),
    );

    setFavoriteProducts(fetchedProducts);
    setIsLoading(false);
  };

  useEffect(() => {
    if (
      favourites.length !== favouriteProducts.length
      || favouriteProducts.length === 0
    ) {
      setIsLoading(true);

      fetchFavoriteProducts();
    }
  }, [favourites]);

  return (
    <div>
      <div className={cn(container, containerTop)}>
        <div className={cn(grid, gridDesktop, gridTablet, gridMobile)}>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopFullSize,
              iconHistory,
            )}
          >
            <div className={containerCenter}>
              <Link to="/" className={icon}>
                <Home />
              </Link>
              <ForwardButton onClick={() => 'click me'} label="Favourites" />
            </div>
          </div>
        </div>
      </div>

      <div className={cn(container, sectionMargin)}>
        <div className={cn(grid, gridDesktop, gridTablet, gridMobile)}>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopFullSize,
            )}
          >
            <h1 className={title}>Favourites</h1>
          </div>
        </div>
      </div>

      {isLoading && <Loader className={loader} />}

      {!isLoading && (
        <>
          <div className={cn(container, textMargin)}>
            <div className={cn(grid, gridMobile, gridTablet, gridDesktop)}>
              <div
                className={cn(
                  gridItem,
                  gridMobileFullSize,
                  gridTabletFullSize,
                  gridDesktopFullSize,
                )}
              >
                <p className={text}>{`${favouritesProducts.length} items`}</p>
              </div>
            </div>
          </div>

          {favouritesProducts.length === 0 && (
            <div className={cn(container, sectionMargin)}>
              <div className={cn(grid, gridDesktop, gridTablet, gridMobile)}>
                <div
                  className={cn(
                    gridItem,
                    gridMobileFullSize,
                    gridTabletFullSize,
                    gridDesktopFullSize,
                  )}
                >
                  <EmptyFavourites />
                </div>
              </div>
            </div>
          )}

          <div className={cn(catalog)}>
            {favouritesProducts.map((product) => (
              <ProductCard
                key={product.id}
                itemId={product.itemId}
                title={product.name}
                imgURL={product.image}
                price={product.price}
                oldPrice={product.fullPrice}
                screen={product.screen}
                capacity={product.capacity}
                ram={product.ram}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FavouritePage;
