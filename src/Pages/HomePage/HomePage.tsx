import CategorySection from './CategorySection/CategorySection';
import MainTitle from './MainTitle/MainTitle';
import BrandNewProducts from './BrandNewProducts';

const HomePage: React.FC = () => {
  return (
    <div>
      <MainTitle />
      <BrandNewProducts />
      <CategorySection />
    </div>
  );
};

export default HomePage;
