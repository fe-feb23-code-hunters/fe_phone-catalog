/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link } from 'react-router-dom';
import Arrow from '../../icons/Arrow';
import classes from './Footer.module.scss';
import IconsButton from '../shared/buttons/IconButton/IconButton';

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

export const Footer = () => {
  const {
    container,
    footer,
    'footer__nav-list': navList,
    'footer__top-action': topAction,
    footer__logo: footerLogo,
    'footer__nav-list-item': navlistItem,
    'footer__nav-list-link': navListLink,
    'footer__top-action-arrow': topActionArrow,
  } = classes;

  return (
    <div className={container}>
      <footer className={footer}>
        <div>
          <Link to="/#">
            <img
              src={`${process.env.PUBLIC_URL}/img/logo/logo.svg`}
              alt="Nice Gadgets"
              className={footerLogo}
            />
          </Link>
        </div>

        <ul className={navList}>
          <li className={navlistItem}>
            <Link
              to="https://github.com/fe-feb23-code-hunters"
              className={navListLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </Link>
          </li>
          <li className={navlistItem}>
            <Link to="/contacts" className={navListLink}>
              contacts
            </Link>
          </li>
          <li>
            <Link to="/rights" className={navListLink}>
              rights
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={handleScrollToTop}
          className={topAction}
        >
          Back to top
          <IconsButton onClick={handleScrollToTop}>
            <Arrow className={topActionArrow} />
          </IconsButton>
        </button>
      </footer>
    </div>
  );
};
