import { Link } from 'react-router-dom';
import classes from './PageNotFound.module.scss';

export const PageNotFound: React.FC = () => (
  <div className={classes.container}>
    <img
      src={`${process.env.PUBLIC_URL}/img/PageNotFound/pageNotFound.svg`}
      alt="page not found"
      className={classes.page_not_found}
    />
    <h1>Ooops, looks like a ghost!</h1>
    <br />
    <h4>
      The page you are looking for can&apos;t be found. Go home by &nbsp;
      <Link to="/">clicking here!</Link>
    </h4>
  </div>
);
