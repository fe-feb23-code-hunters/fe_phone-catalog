import { Link } from 'react-router-dom';
import classes from './BurgerMenu.module.scss';
import Close from '../../icons/Close/Close';
import HeartOutlined from '../../icons/HeartOutlined/HeartOutlined';
import ShoppingBag from '../../icons/ShoppingBag/ShoppingBag';

export const BurgerMenu = () => {
  const {
    burger,
    container,
    burger__content: content,
    burger_top_actions: topActions,
    logo__img: logoImg,
    burger__top_close: closeLink,
    burger__list: navList,
    burger__item: navItem,
    burger__link: navLink,
    burger__bottom: bottomContainer,
    burger__bottom_icon: bottomIcon,
    burger__bottom_icon__left: bottomIconLeft,
  } = classes;

  return (
    <nav className={burger} id="menu">
      <div className={container}>
        <div className={content}>
          <div className={topActions}>
            <Link to="/" className="logo">
              <img
                src={`${process.env.PUBLIC_URL}/img/logo/logo.svg`}
                alt="Nice Gadgets Logo"
                className={logoImg}
              />
            </Link>
            <Link to="/" className={closeLink}>
              <Close />
            </Link>
          </div>

          <ul className={navList}>
            <li className={navItem}>
              <Link to="/" className={navLink}>
                Home
              </Link>
            </li>

            <li className={navItem}>
              <Link to="/phone" className={navLink}>
                Phones
              </Link>
            </li>

            <li className={navItem}>
              <Link to="/tablets" className={navLink}>
                Tablets
              </Link>
            </li>

            <li className={navItem}>
              <Link to="/accesories" className={navLink}>
                Accesories
              </Link>
            </li>
          </ul>

          <div className={bottomContainer}>
            <Link to="/favourite" className={bottomIcon}>
              <HeartOutlined />
            </Link>

            <Link to="/shoppingbag" className={bottomIconLeft}>
              <ShoppingBag />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
