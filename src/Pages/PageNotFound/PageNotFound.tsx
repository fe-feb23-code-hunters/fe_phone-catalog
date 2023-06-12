import { Link } from 'react-router-dom';
import classes from './PageNotFound.module.scss';

const PageNotFound: React.FC = () => (
  <div className={classes.container}>
    <div className={classes.ghost}>
      <div className={classes.ghost_body}>
        <div className={classes.face}>
          <div className={classes.eyes} />
        </div>
        <div className={classes.bottom}>
          <div className={classes.circle} />
          <div className={classes.circle} />
          <div className={classes.circle} />
          <div className={classes.wave} />
        </div>
      </div>
      <div className={classes.shadow} />
    </div>
    <div className={classes.description}>
      <h3 className={classes.text__title}>Ooops, looks like a ghost!</h3>
      <h4 className={classes.text__body}>
        The page you are looking for can&apos;t be found.
        <br />
        Go home by &nbsp;
        <Link className={classes.text__body} to="/">
          clicking here!
        </Link>
      </h4>
    </div>
  </div>
);

export default PageNotFound;
