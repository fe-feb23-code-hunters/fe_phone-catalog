import './BurgerMenu.scss';
import Close from '../../icons/Close/Close';
import HeartOutlined from '../../icons/HeartOutlined/HeartOutlined';
import ShoppingBag from '../../icons/ShoppingBag/ShoppingBag';

export const BurgerMenu = () => {
  return (
    <nav className="burger" id="menu">
      <div className="container">
        <div className="burger__content">
          <div className="burger__top top-actions">
            <a href="/" className="logo">
              <img
                src="/img/logo/logo.png"
                alt="Nice Gadgets Logo"
                className="logo__img"
              />
            </a>
            <a href="/" className="burger__top_close">
              <Close />
            </a>
          </div>
          <ul className="burger__list">
            <li className="burger__item">
              <a href="/" className="burger__link">
                Home
              </a>
            </li>
            <li className="burger__item">
              <a href="/phone" className="burger__link">
                Phones
              </a>
            </li>
            <li className="burger__item">
              <a href="/tablets" className="burger__link">
                Tablets
              </a>
            </li>
            <li className="burger__item">
              <a href="/accesories" className="burger__link">
                Accesories
              </a>
            </li>
          </ul>
          <div className="burger__bottom bottom-actions">
            <a href="/" className="burger__bottom-icon">
              <HeartOutlined />
            </a>
            <a
              href="/"
              className="burger__bottom-icon burger__bottom-icon--left"
            >
              <ShoppingBag />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
