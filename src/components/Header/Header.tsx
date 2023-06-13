import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
// import cn from 'classnames';
import { PageNavigation } from '../PageNavigation';
import classes from './Header.module.scss';
import HeartOutlined from '../../icons/HeartOutlined/HeartOutlined';
import ShoppingBag from '../../icons/ShoppingBag/ShoppingBag';
import Menu from '../../icons/Menu';
import { BurgerMenu } from '../BurgerMenu';
import IconWithCounter from '../shared/IconWithCounter';
import { CartContext } from '../../providers/CartProvider/CartProvider';
// eslint-disable-next-line max-len
import { FavouritesContext } from '../../providers/FavouritesProvider/FavouritesProvider';

const {
  header,
  header__logo: headerLogo,
  'header__bar-icon': headerBarIcon,
  'header__icons-container': headerIconsContainer,
  'header__nav-container': headerNavContainer,
  'header__menu-button': headerMenuButton,
} = classes;

export const Header = () => {
  const { cart } = useContext(CartContext);
  const { favourites } = useContext(FavouritesContext);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  const handleMenuButtonClick = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };

  return (
    <>
      <header className={header}>
        <div className={headerNavContainer}>
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/img/logo/logo.svg`}
              alt="Nice Gadgets"
              className={headerLogo}
            />
          </Link>

          <PageNavigation />
        </div>

        <div className={headerIconsContainer}>
          <Link to="/favourites" className={headerBarIcon}>
            <IconWithCounter count={favourites.length}>
              <HeartOutlined />
            </IconWithCounter>
          </Link>
          <Link to="/cart" className={headerBarIcon}>
            <IconWithCounter count={cart.length}>
              <ShoppingBag />
            </IconWithCounter>
          </Link>
        </div>

        <Link
          to="#menu"
          className={headerMenuButton}
          onClick={handleMenuButtonClick}
        >
          <Menu />
        </Link>
      </header>
      <BurgerMenu
        handleClick={handleMenuButtonClick}
        isActive={showBurgerMenu}
      />
    </>
  );
};
