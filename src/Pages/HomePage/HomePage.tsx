import { BunnerSlider } from '../../components/sliders/bunnerSlider';
import {
  ProductSlider,
} from '../../components/sliders/productSlider/productSlider';
import CategorySection from './CategorySection/CategorySection';
import classes from './HomePage.module.scss';

const HomePage: React.FC = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.homePage__title}>
        Welcome to Nice Gadgets store!
      </h1>
      <div className={classes.bunner__slider}>
        <BunnerSlider />
      </div>
      <div className={classes.hot__prices}>
        <ProductSlider title="Hot Prices" />
      </div>
      <CategorySection />
      <div className={classes.brand__new__models}>
        <ProductSlider title="Brand new models" />
      </div>
    </div>
  );
};

export default HomePage;
