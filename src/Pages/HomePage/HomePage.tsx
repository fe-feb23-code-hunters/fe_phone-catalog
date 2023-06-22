import { useEffect } from 'react';
import BrandNewProducts from './BrandNewProducts/BrandNewProducts';
import CategorySection from './CategorySection/CategorySection';
import classes from './HomePage.module.scss';
import HotPricesProducts from './HotPriscesProducts/HotPricesProducts';
import { BunnerSlider } from '../../components/bunnerSldier/bunnerSlider';

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });

  return (
    <div className={classes.container}>
      <h1 className={classes.homePage__title}>
        Welcome to Nice Gadgets store!
      </h1>
      <div className={classes.bunner__slider}>
        <BunnerSlider />
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
