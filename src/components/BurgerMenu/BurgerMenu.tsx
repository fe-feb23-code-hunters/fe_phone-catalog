import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useContext, useEffect } from 'react';
import { useLockedBody } from 'usehooks-ts';
import classes from './BurgerMenu.module.scss';
import Close from '../../icons/Close/Close';
import HeartOutlined from '../../icons/HeartOutlined/HeartOutlined';
import ShoppingBag from '../../icons/ShoppingBag/ShoppingBag';
import IconWithCounter from '../shared/IconWithCounter';
import { CartContext } from '../../providers/CartProvider/CartProvider';

interface Props {
  handleClick: () => void;
  isActive: boolean;
}

export const BurgerMenu: React.FC<Props> = ({ handleClick, isActive }) => {
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
    'burger--active': active,
  } = classes;

  const { cart } = useContext(CartContext);

  const [, setLocked] = useLockedBody(false, 'root');

  useEffect(() => {
    setLocked(isActive);
  }, [isActive]);

  return (
    <nav className={cn(burger, { [active]: isActive })} id="menu">
      <div className={container}>
        <div className={content}>
          <div className={topActions}>
            <Link to="/" className="logo" onClick={handleClick}>
              <img
                src={`${process.env.PUBLIC_URL}/img/logo/logo.svg`}
                alt="Nice Gadgets Logo"
                className={logoImg}
              />
            </Link>
            <button type="button" className={closeLink} onClick={handleClick}>
              <Close />
            </button>
          </div>

          <ul className={navList}>
            <li className={navItem}>
              <Link to="/" className={navLink} onClick={handleClick}>
                Home
              </Link>
            </li>

            <li className={navItem}>
              <Link to="/phones" className={navLink} onClick={handleClick}>
                Phones
              </Link>
            </li>

            <li className={navItem}>
              <Link to="/tablets" className={navLink} onClick={handleClick}>
                Tablets
              </Link>
            </li>

            <li className={navItem}>
              <Link to="/accesories" className={navLink} onClick={handleClick}>
                Accesories
              </Link>
            </li>
          </ul>

          <div className={bottomContainer}>
            <Link to="/favourites" className={bottomIcon} onClick={handleClick}>
              <HeartOutlined />
            </Link>

            <Link to="/cart" className={bottomIconLeft} onClick={handleClick}>
              <IconWithCounter count={cart.length}>
                <ShoppingBag />
              </IconWithCounter>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
