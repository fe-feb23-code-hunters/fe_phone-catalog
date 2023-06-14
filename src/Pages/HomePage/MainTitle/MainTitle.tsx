import cn from 'classnames';
import classes from './MainTitle.module.scss';

const MainTitle = () => {
  const {
    container,
    'container__top-margin': containerMarginTop,
    grid,
    main__title: mainTitle,
    grid__desktop: gridDesktop,
    grid__tablet: gridTablet,
    grid__mobile: gridMobile,
    grid__item: gridItem,
    grid__item__mobile_1_4: gridMobileFullSize,
    grid__item__tablet_1_12: gridTabletFullSize,
    grid__item__desktop_1_24: gridDesktopFullSize,
  } = classes;

  return (
    <div className={cn(container, containerMarginTop)}>
      <div className={cn(grid, gridMobile, gridTablet, gridDesktop)}>
        <div
          className={cn(
            gridItem,
            gridMobileFullSize,
            gridTabletFullSize,
            gridDesktopFullSize,
          )}
        >
          <h1 className={mainTitle}>Welcome to Nice Gadgets store!</h1>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;
