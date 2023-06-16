import BrandNewProducts from './BrandNewProducts/BrandNewProducts';
import CategorySection from './CategorySection/CategorySection';
import classes from './HomePage.module.scss';
import HotPricesProducts from './HotPriscesProducts/HotPricesProducts';

const HomePage: React.FC = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.homePage__title}>
        Welcome to Nice Gadgets store!
      </h1>
      <div className={classes.bunner__slider}>
        bunner
      </div>
      <div className={classes.hot__prices}>
        <HotPricesProducts />
      </div>
      <CategorySection />
      <div className={classes.brand__new__models}>
        <BrandNewProducts />
      </div>
    </div>
  );
};

export default HomePage;
