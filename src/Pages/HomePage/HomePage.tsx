import CategorySection from './CategorySection/CategorySection';
import MainTitle from './MainTitle/MainTitle';
import BrandNewProducts from './BrandNewProducts';
import ProductsWithDiscount from './ProductsWithDiscount';

const HomePage: React.FC = () => (
  <>
    <MainTitle />

    <BrandNewProducts />

    <CategorySection />

    <ProductsWithDiscount />
  </>
);

export default HomePage;
