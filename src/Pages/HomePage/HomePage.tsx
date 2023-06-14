import { BunnerSlider } from '../../components/sliders/bunnerSlider';
import CategorySection from './CategorySection/CategorySection';

const HomePage: React.FC = () => {
  return (
    <div>
      <BunnerSlider />
      <CategorySection />
    </div>
  );
};

export default HomePage;
