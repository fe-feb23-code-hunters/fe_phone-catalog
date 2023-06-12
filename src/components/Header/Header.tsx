import { Link } from 'react-router-dom';
import { PageNavigation } from '../PageNavigation';
import classes from './Header.module.scss';
import HeartOutlined from '../../icons/HeartOutlined/HeartOutlined';
import ShoppingBag from '../../icons/ShoppingBag/ShoppingBag';
import Menu from '../../icons/Menu';

const {
  header,
  header__logo: headerLogo,
  'header__bar-icon': headerBarIcon,
  'header__icons-container': headerIconsContainer,
  'header__nav-container': headerNavContainer,
  'header__menu-button': headerMenuButton,
} = classes;

export const Header = () => {
  return (
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
          <HeartOutlined />
        </Link>
        <Link to="/cart" className={headerBarIcon}>
          <ShoppingBag />
        </Link>
      </div>

      <button
        className={headerMenuButton}
        type="button"
      >
        <Menu />
      </button>
    </header>
  );
};
