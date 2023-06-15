/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import {
  fetchProductById,
  fetchRecommendedProducts,
} from '../../api/products.api';
import { Product } from '../../types/product';
import classes from './productDetails.module.scss';
import Arrow from '../../icons/Arrow';
import Home from '../../icons/Home';
import BackButton from '../../components/shared/buttons/BackButton';
import PhotoSelect from '../../components/PhotoSelect/PhotoSelect';

const ProductDetails: React.FC = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  // eslint-disable-next-line max-len
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  const [error, setError] = useState<Error | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

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
    grid__item__desktop_13_24: gridDesktopEnd,
    grid__item__tablet_1_7: gridTabletStart,
    grid__item__tablet_8_12: gridTabletEnd,
    grid__item__mobile_1_3: gridMobileStart,
    grid__item__mobile_4_5: gridMobileEnd,
    text__disabled: disabledText,
    icon__history: iconHistory,
    container__center: containerCenter,
    container__top: containerTop,
    section__margin: sectionMargin,
    block__margin: blockMargin,
  } = classes;

  const onSelectPhoto = (newPhoto: string) => {
    setSelectedPhoto(newPhoto);
  };

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
  };

  const fetchRecommended = async () => {
    try {
      if (productId) {
        const { products } = await fetchRecommendedProducts(productId);

        setRecommendedProducts(products);
      }
    } catch (err) {
      setError(err as Error);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchRecommended();
  }, [productId]);

  useEffect(() => {
    if (product) {
      setSelectedPhoto(product.image);
    }
  }, [product]);

  return (
    <div>
      {product && (
        <>
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
              )}
            >
              <PhotoSelect
                name={product.name}
                values={product.phone?.images}
                selectedPhoto={selectedPhoto}
                onSelectPhoto={onSelectPhoto}
              />
            </div>

            <div
              className={cn(
                gridItem,
                gridDesktopEnd,
                gridTabletEnd,
                gridMobileFullSize,
                template,
              )}
            >
              <div className={cn(grid)}>
                <div
                  className={cn(
                    gridItem,
                    gridDesktopStart,
                    gridTabletStart,
                    gridMobileStart,
                  )}
                >
                  <div
                    className={cn(template)}
                  >
                    <h1 className={cn(text)}>Available colors block</h1>
                  </div>

                  <div
                    className={cn(template)}
                  >
                    <h1 className={cn(text)}>Select Capacity block</h1>
                  </div>

                  <div
                    className={cn(template)}
                  >
                    <h1 className={cn(text)}>Action block</h1>
                  </div>
                </div>

                <div className={cn(gridItem, gridDesktopEnd, gridTabletEnd, gridMobileEnd)}>
                  <h1 className={cn(text)}>Id</h1>
                </div>
              </div>
            </div>
          </div>

          <div className={cn(container, grid, blockMargin)}>
            <div
              className={cn(
                gridItem,
                gridDesktopStart,
                gridTabletStart,
                gridMobileFullSize,
                template,
              )}
            >
              <h1 className={cn(text)}>About</h1>
            </div>

            <div
              className={cn(
                gridItem,
                gridDesktopEnd,
                gridTabletEnd,
                gridMobileFullSize,
                template,
              )}
            >
              <h1 className={cn(text)}>Tech specs</h1>
            </div>
          </div>

          <div className={cn(container, blockMargin)}>
            <h2 className={cn(subtitle, template)}>You may also like</h2>
          </div>
        </>
      )}

      {error && `Error: ${error}`}
      {recommendedProducts.map(recommendedProduct => {
        return <h1 key={recommendedProduct.id}>{recommendedProduct.name}</h1>;
      })}
    </div>
  );
};

export default ProductDetails;
