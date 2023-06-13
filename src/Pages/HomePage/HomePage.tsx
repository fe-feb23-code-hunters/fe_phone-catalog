import { MainSlider } from '../../components/ui/sliders/mainSlider/mainSlider';
import classes from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={`${classes.home} ${classes.container}`}>
      <div className={classes.home__slider}>
        <MainSlider />
      </div>
      <div className={classes.product__slider}>
        product slider
      </div>
      <div className={classes.product__categories}>
        categories cards
      </div>
      <div className={classes.product__slider}>
        product slider
      </div>
    </div>
  );
};

export default HomePage;
