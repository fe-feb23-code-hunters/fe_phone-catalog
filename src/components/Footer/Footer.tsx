/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Arrow from '../../icons/Arrow';
import classes from './Footer.module.scss';

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

const handleKeyDown = (event: React.KeyboardEvent<HTMLParagraphElement>) => {
  if (event.ctrlKey && event.key === 'PageUp') {
    handleScrollToTop();
  }
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
    'footer__top-action-message': topActionMessage,
    'footer__top-action-button': topActionButton,
    'footer__top-action-arrow': topActionArrow,
  } = classes;

  return (
    <div className={container}>
      <footer className={footer}>
        <div>
          <a href="/#">
            <img
              src={`${process.env.PUBLIC_URL}/img/logo/logo.png`}
              alt="Nice Gadgets"
              className={footerLogo}
            />
          </a>
        </div>

        <ul className={navList}>
          <li className={navlistItem}>
            <a href="/#" className={navListLink}>
              github
            </a>
          </li>
          <li className={navlistItem}>
            <a href="/#" className={navListLink}>
              contacts
            </a>
          </li>
          <li>
            <a href="/#" className={navListLink}>
              rights
            </a>
          </li>
        </ul>

        <div className={topAction}>
          <p
            className={topActionMessage}
            onClick={handleScrollToTop}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
          >
            Back to top
          </p>
          <button
            type="button"
            className={topActionButton}
            onClick={handleScrollToTop}
          >
            <Arrow className={topActionArrow} />
          </button>
        </div>
      </footer>
    </div>
  );
};
