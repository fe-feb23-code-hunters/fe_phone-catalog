/* eslint-disable max-len */
import {
  MouseEventHandler, useContext, useEffect, useState,
} from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { fetchProductById } from '../../api/products.api';
import { Product } from '../../types/product';
import classes from './productDetails.module.scss';
import Arrow from '../../icons/Arrow';
import Home from '../../icons/Home';
import BackButton from '../../components/shared/buttons/BackButton';
import { AboutProduct } from '../../components/AboutProduct';
import { TechSpecs } from '../../components/TechSpecs';
import RecommendedProducts from './RecommendedProducts/RecommendedProducts';
import ColorSelect from '../../components/ColorSelect/ColorSelect';
import CapacitySelect from '../../components/CapacitySelect/CapacitySelect';
import LikeButton from '../../components/shared/buttons/LikeButton/LikeButton';
import Button from '../../components/shared/buttons/Button/Button';
import { CartContext } from '../../providers/CartProvider/CartProvider';
import { FavouritesContext } from '../../providers/FavouritesProvider/FavouritesProvider';
import Loader from '../../components/shared/Loader';

const DUMMY_OPTIONS = ['32GB', '64GB', '128GB', '256GB', '512GB'];
const DUMMY_COLORS = ['black', 'spacegray', 'midnightgreen',
  'gold', 'white', 'purple', 'yellow', 'green', 'red', 'silver'];

const ProductDetails: React.FC = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<Error | null>(null);

  const { cart, addToCart, deleteFromCart } = useContext(CartContext);
  const { favourites, addToFavourites, deleteFromFavourites }
    = useContext(FavouritesContext);

  const doesExistInCart
    = cart.findIndex((products) => products.id === productId) !== -1;

  const doesExistInFavourites
    = favourites.findIndex((products) => products.id === product?.id) !== -1;

  const buttonLabel = doesExistInCart ? 'Added' : 'Add to cart';

  const handleAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    if (doesExistInCart) {
      deleteFromCart(String(productId));
    } else {
      addToCart(String(productId));
    }
  };

  const handleAddToFavourites: MouseEventHandler<HTMLButtonElement> = (
    event,
  ) => {
    event.stopPropagation();

    if (doesExistInFavourites) {
      deleteFromFavourites(String(product?.id));
    } else {
      addToFavourites(String(product?.id));
    }
  };

  const [selectedOption, setSelectedOption] = useState<string>(
    DUMMY_COLORS[0],
  );

  const onSelectChange = (newOption: string) => {
    setSelectedOption(newOption);
  };

  const [selectedCapacity, setSelectedCapacity] = useState<string>(
    DUMMY_OPTIONS[1],
  );

  const onCapacityChange = (newOption: string) => {
    setSelectedCapacity(newOption);
  };

  const {
    container,
    grid,
    icon,
    title,
    subtitle,
    text,
    link,
    template,
    button__back: buttonBack,
    grid__desktop: gridDesktop,
    grid__tablet: gridTablet,
    grid__mobile: gridMobile,
    grid__item: gridItem,
    grid__item__mobile_1_4: gridMobileFullSize,
    grid__item__tablet_1_12: gridTabletFullSize,
    grid__item__desktop_1_24: gridDesktopFullSize,
    grid__item__desktop_1_12: gridDesktopStart,
    grid__item__tablet_1_7: gridTabletStart,
    grid__item__tablet_8_12: gridTabletEnd,
    grid__item__desktop_14_20: gridDesktopQuarter,
    grid__item__desktop_14_24: gridDesktopEnd,
    grid__item__desktop_21_24: gridDesktop2024,
    text__disabled: disabledText,
    icon__history: iconHistory,
    container__center: containerCenter,
    container__top: containerTop,
    section__margin: sectionMargin,
    block__margin: blockMargin,
    color__margin__top: colorMarginTop,
    id__body: idBody,
    id__title: idTitle,
    price__body: priceBody,
    product__price: producPrice,
    product__fullprice: productFullPrice,
    cart__body: cartBody,
    favourites__button: favouritesButton,
    main__info: mainInfo,
    main__info__list: mainInfoList,
    main__info__item: mainInfoItem,
    'main__info__item-title': mainInfoItemTitle,
    'main__info__item-info': mainInfoItemInfo,
  } = classes;

  const goBack = () => {
    window.history.back();
  };

  const fetchProduct = async () => {
    try {
      if (productId) {
        const fetchedProduct = await fetchProductById(productId);

        setProduct(fetchedProduct);
      }
    } catch (err) {
      setError(err as Error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchProduct();
  }, [productId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

              <Arrow />

              <Link to="/phones" className={link}>
                <p className={cn(text)}>Phones</p>
              </Link>

              <Arrow />

              <p className={cn(text, disabledText)}>{product?.name}</p>
            </div>

            <div
              className={cn(
                gridItem,
                gridMobileFullSize,
                gridTabletFullSize,
                gridDesktopFullSize,
                iconHistory,
              )}
            >
              <div className={buttonBack}>
                <BackButton onClick={goBack} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoading && <Loader />}

      {product && (
        <>
          <div className={cn(container)}>
            <div className={cn(grid, gridDesktop, gridTablet, gridMobile)}>
              <div
                className={cn(
                  gridItem,
                  gridMobileFullSize,
                  gridTabletFullSize,
                  gridDesktopFullSize,
                )}
              >
                <h1 className={title}>{product?.name}</h1>
              </div>
            </div>
          </div>

          <div className={cn(container, grid, sectionMargin, blockMargin)}>
            <div
              className={cn(
                gridItem,
                gridDesktopStart,
                gridTabletStart,
                gridMobileFullSize,
                template,
              )}
            >
              <h1 className={cn(text)}>Photo block</h1>
            </div>
            <div
              className={cn(
                gridItem,
                gridMobileFullSize,
                gridTabletEnd,
                gridDesktopQuarter,
                colorMarginTop,
              )}
            >
              <ColorSelect
                key={product.id}
                title="Available colors"
                id={`ID: 80239${product.id}`}
                options={product.phone?.colorsAvailable}
                selectedOption={selectedOption}
                onSelect={onSelectChange}
              />
            </div>
            <div
              className={cn(gridItem, gridDesktop2024, colorMarginTop, idBody)}
            >
              <div className={idBody}>
                <p className={idTitle}>{`ID: 80239${product.id}`}</p>
              </div>
            </div>
            <div
              className={cn(
                gridItem,
                gridMobileFullSize,
                gridTabletEnd,
                gridDesktopQuarter,
              )}
            >
              <CapacitySelect
                title="Select capacity"
                capacitys={product.phone?.capacityAvailable}
                selectedCapacity={selectedCapacity}
                onSelectCapacity={onCapacityChange}
              />
            </div>
            <div
              className={cn(
                gridItem,
                gridMobileFullSize,
                gridTabletEnd,
                gridDesktopQuarter,
              )}
            >
              <div className={priceBody}>
                <h2 className={producPrice}>{`$${product.price}`}</h2>
                <h2 className={productFullPrice}>{`$${product.fullPrice}`}</h2>
              </div>
              <div className={cartBody}>
                <Button
                  label={buttonLabel}
                  onClick={handleAddToCart}
                  isSelected={doesExistInCart}
                  height="48px"
                />
                <div className={favouritesButton}>
                  <LikeButton
                    onClick={handleAddToFavourites}
                    isSelected={doesExistInFavourites}
                    isBiggest
                  />
                </div>
              </div>
              <div className={mainInfo}>
                <ul className={mainInfoList}>
                  <li className={mainInfoItem}>
                    <span className={mainInfoItemTitle}>Screen</span>
                    <span className={mainInfoItemInfo}>{product.screen}</span>
                  </li>
                  <li className={mainInfoItem}>
                    <span className={mainInfoItemTitle}>Resolution</span>
                    <span className={mainInfoItemInfo}>
                      {product?.phone?.resolution}
                    </span>
                  </li>
                  <li className={mainInfoItem}>
                    <span className={mainInfoItemTitle}>Processor</span>
                    <span className={mainInfoItemInfo}>
                      {product?.phone?.processor}
                    </span>
                  </li>
                  <li className={mainInfoItem}>
                    <span className={mainInfoItemTitle}>RAM</span>
                    <span className={mainInfoItemInfo}>{product?.ram}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={cn(container, grid, blockMargin)}>
            <div
              className={cn(
                gridItem,
                gridDesktopStart,
                gridTabletFullSize,
                gridMobileFullSize,
              )}
            >
              <AboutProduct phone={product.phone} />
            </div>

            <div
              className={cn(
                gridItem,
                gridDesktopEnd,
                gridTabletFullSize,
                gridMobileFullSize,
              )}
            >
              <TechSpecs product={product} />
            </div>
          </div>

          <div className={cn(container, blockMargin)}>
            <h2 className={cn(subtitle, template)}>You may also like</h2>
          </div>
          <RecommendedProducts />
        </>
      )}
    </div>
  );
};

export default ProductDetails;
