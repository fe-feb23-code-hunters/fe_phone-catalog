import classes from './no-products-found.module.scss';

export const NoProductsFound = () => (
  <div className={classes.container}>
    <div className={classes.info}>
      <h2 className={classes.title}>🤷</h2>
      <h2 className={classes.title}>There are no such products</h2>
      <p className={classes.text}>Try to change your request</p>
    </div>
  </div>
);
