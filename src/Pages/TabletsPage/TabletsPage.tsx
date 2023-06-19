import { Link } from 'react-router-dom';
import cn from 'classnames';
import ForwardButton from '../../components/shared/buttons/ForwardButton';
import Home from '../../icons/Home';
import classes from './TabletsPage.module.scss';
import { EmptyProductsPage } from '../../components/EmptyProductsPage';

const {
  grid,
  icon,
  container,
  title,
  text,
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

const TabletsPage: React.FC = () => {
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
              <ForwardButton label="Tablets" />
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
            <h1 className={title}>Tablets</h1>
          </div>
        </div>
      </div>

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
            <p className={text}>0 items</p>
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
            <EmptyProductsPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletsPage;
