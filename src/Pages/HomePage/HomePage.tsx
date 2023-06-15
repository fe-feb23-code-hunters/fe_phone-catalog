import CategorySection from './CategorySection/CategorySection';
import MainTitle from './MainTitle/MainTitle';
import BrandNewProducts from './BrandNewProducts';
import ProductsWithDiscount from './ProductsWithDiscount';

const HomePage: React.FC = () => {
  return (
    <div>
      <MainTitle />
      <BrandNewProducts />
      <ProductsWithDiscount />
      <CategorySection />
    </div>
  );
};

export default HomePage;
