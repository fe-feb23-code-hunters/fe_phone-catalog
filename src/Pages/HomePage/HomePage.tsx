import { BunnerSlider } from '../../components/sliders/bunnerSlider';
import {
  ProductSlider,
} from '../../components/sliders/productSlider/productSlider';
import CategorySection from './CategorySection/CategorySection';

const HomePage: React.FC = () => {
  return (
    <div>
      <BunnerSlider />
      <ProductSlider />
      <CategorySection />
    </div>
  );
};

export default HomePage;
