import { PageNavLink } from '../PageNavLink';
import classes from './PageNavigation.module.scss';

const { nav__list: navList } = classes;

const navLinks = [
  { to: '/', text: 'home' },
  { to: '/phones', text: 'phones' },
  { to: '/tablets', text: 'tablets' },
  { to: '/accessories', text: 'accessories' },
];

export const PageNavigation = () => (
  <nav>
    <ul className={navList}>
      {navLinks.map(({ to, text }) => (
        <PageNavLink key={to} to={to} text={text} />
      ))}
    </ul>
  </nav>
);
