import { Link } from 'react-router-dom';
import classes from './BurgerMenu.module.scss';
import Close from '../../icons/Close/Close';
import HeartOutlined from '../../icons/HeartOutlined/HeartOutlined';
import ShoppingBag from '../../icons/ShoppingBag/ShoppingBag';

export const BurgerMenu = () => {
  return (
    <nav className={classes.burger} id="menu">
      <div className={classes.container}>
        <div className={classes.burger__content}>
          <div className={classes.burger_top_actions}>
            <Link to="/" className="logo">
              <img
                src={`${process.env.PUBLIC_URL}/img/logo/logo.png`}
                alt="Nice Gadgets Logo"
                className={classes.logo__img}
              />
            </Link>
            <Link to="/" className={classes.burger__top_close}>
              <Close />
            </Link>
          </div>

          <ul className={classes.burger__list}>
            <li className={classes.burger__item}>
              <Link to="/" className={classes.burger__link}>
                Home
              </Link>
            </li>

            <li className={classes.burger__item}>
              <Link to="/phone" className={classes.burger__link}>
                Phones
              </Link>
            </li>

            <li className={classes.burger__item}>
              <Link to="/tablets" className={classes.burger__link}>
                Tablets
              </Link>
            </li>

            <li className={classes.burger__item}>
              <Link to="/accesories" className={classes.burger__link}>
                Accesories
              </Link>
            </li>
          </ul>

          <div className={classes.burger__bottom}>
            <Link to="/favourite" className={classes.burger__bottom_icon}>
              <HeartOutlined />
            </Link>

            <Link
              to="/shoppingbag"
              className={classes.burger__bottom_icon__left}
            >
              <ShoppingBag />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
