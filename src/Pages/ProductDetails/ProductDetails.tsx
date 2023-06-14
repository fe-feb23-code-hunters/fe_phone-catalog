/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { fetchProductById } from '../../api/products.api';
import { Product } from '../../types/product';
import classes from './productDetails.module.scss';
import Arrow from '../../icons/Arrow';
import Home from '../../icons/Home';
import BackButton from '../../components/shared/buttons/BackButton';

const ProductDetails: React.FC = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const {
    container,
    grid,
    icon,
    title,
    text,
    link,
    phone,
    template,
    info,
    about,
    button__back: buttonBack,
    grid__desktop: gridDesktop,
    grid__tablet: gridTablet,
    grid__mobile: gridMobile,
    grid__item: gridItem,
    grid__item__mobile_1_2: gridMobileFullSize,
    grid__item__tablet_1_6: gridTabletFullSize,
    grid__item__desktop_1_8: gridDesktopFullSize,
    grid__item__desktop_1_4: gridDesktopPhotoBlock,
    grid__item__desktop_5_8: gridDesktopInfoBlock,
    grid__item__tablet_1_4: gridTabletPhotoBlock,
    grid__item__tablet_5_8: gridTabletInfoBlock,
    grid__item__desktop_1_4: gridDesktopAboutBlock,
    grid__item__desktop_5_8: gridDesktopTechSpecsBlock,
    text__disabled: disabledText,
    icon__history: iconHistory,
    container__center: containerCenter,
    container__top: containerTop,
    section__margin: sectionMargin,
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
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

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

              <p className={cn(text, disabledText)}>Phone name</p>
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
            <h1 className={title}>Phone name</h1>
          </div>
        </div>
      </div>

      <div className={cn(phone, sectionMargin)}>
        <div
          className={cn(
            gridItem,
            gridDesktopPhotoBlock,
            gridTabletPhotoBlock,
            template,
          )}
        >
          <h1 className={cn(text)}>Photo block</h1>
        </div>

        <div
          className={cn(
            gridItem,
            gridDesktopInfoBlock,
            gridTabletInfoBlock,
            template,
          )}
        >
          <div className={cn(info)}>
            <div className={cn(gridItem)}>
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

            <div className={cn(gridItem)}>
              <h1 className={cn(text)}>Id</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={cn(about, sectionMargin)}>
        <div
          className={cn(
            gridItem,
            gridDesktopAboutBlock,
            template,
          )}
        >
          <h1 className={cn(text)}>About</h1>
        </div>

        <div
          className={cn(
            gridItem,
            gridDesktopTechSpecsBlock,
            template,
          )}
        >
          <h1 className={cn(text)}>Tech specs</h1>
        </div>
      </div>

      <div className={cn(container, sectionMargin, template)}>
        <h1 className={cn(title)}>You may also like</h1>
      </div>

      {product?.name}
      {error && `Error: ${error}`}
    </div>
  );
};

export default ProductDetails;
