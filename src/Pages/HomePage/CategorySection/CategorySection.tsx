import { Link } from 'react-router-dom';
import { useContext } from 'react';
import cn from 'classnames';
import classes from './CategorySection.module.scss';
import Category from '../../../components/Category/Category';
import ScrollToTop from '../../../components/ScrollToTop/ScrollToTop';
// eslint-disable-next-line max-len
import { ProductsContext } from '../../../providers/ProductsProvider/ProductsProvider';

const CategorySection = () => {
  const { products } = useContext(ProductsContext);

  const {
    container,
    grid,
    link,
    grid__desktop: gridDesktop,
    grid__tablet: gridTablet,
    grid__mobile: gridMobile,
    'grid__row-mobile': gridMobileRow,
    grid__item: gridItem,
    grid__item__mobile_1_4: gridMobileFullSize,
    grid__item__tablet_1_12: gridTabletFullSize,
    grid__item__desktop_1_24: gridDesktopFullSize,
    grid__item__desktop_1_8: gridDesktopStart,
    grid__item__tablet_1_4: gridTabletStart,
    grid__item__desktop_9_16: gridDesktopMiddle,
    grid__item__tablet_5_8: gridTabletMiddle,
    grid__item__desktop_17_24: gridDesktopEnd,
    grid__item__tablet_9_12: gridTabletEnd,
    category__title: categoryTitle,
    container__top: containerTop,
  } = classes;

  return (
    <div className={container}>
      <div className={cn(grid, gridMobile, gridTablet, gridDesktop)}>
        <div
          className={cn(
            gridItem,
            gridMobileFullSize,
            gridTabletFullSize,
            gridDesktopFullSize,
          )}
        >
          <h2 className={categoryTitle}>Shop by category</h2>
        </div>
      </div>
      <div
        className={
          cn(
            grid,
            gridMobile,
            gridMobileRow,
            gridTablet,
            gridDesktop,
            containerTop,
          )
        }
      >
        <div
          className={cn(
            gridItem,
            gridMobileFullSize,
            gridTabletStart,
            gridDesktopStart,
          )}
        >
          <Link to="/phones" className={link} onClick={ScrollToTop}>
            <Category
              imgUrl="/img/banners/categories/Category_Phones.jpg"
              altImg="Phones category"
              subtitle="Phones"
              text={`${products.length} models`}
              color="#6D6474"
            />
          </Link>
        </div>
        <div
          className={cn(
            gridItem,
            gridMobileFullSize,
            gridTabletMiddle,
            gridDesktopMiddle,
          )}
        >
          <Link to="/tablets" className={link} onClick={ScrollToTop}>
            <Category
              imgUrl="/img/banners/categories/Category_Tablets.jpg"
              altImg="Tablets category"
              subtitle="Tablets"
              text="24 models"
              color="#8D8D92"
            />
          </Link>
        </div>

        <div
          className={cn(
            gridItem,
            gridMobileFullSize,
            gridTabletEnd,
            gridDesktopEnd,
          )}
        >
          <Link to="/accessories" className={link} onClick={ScrollToTop}>
            <Category
              imgUrl="/img/banners/categories/Category_Accessories.jpg"
              altImg="Accessories category"
              subtitle="Accessories"
              text="100 models"
              color="#973D5F"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
