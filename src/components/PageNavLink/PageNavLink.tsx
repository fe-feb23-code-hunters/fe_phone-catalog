import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import classes from './PageNavLink.module.scss';

interface Props {
  to: string;
  text: string;
}

const {
  nav__link: navLink,
  'nav__link--active': navLinkActive,
} = classes;

export const PageNavLink: React.FC<Props> = ({ to, text }) => (
  <li>
    <NavLink
      to={to}
      className={
        ({ isActive }) => cn(navLink, { [navLinkActive]: isActive })
      }
    >
      {text}
    </NavLink>
  </li>
);
