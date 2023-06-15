/* eslint-disable max-len */
import { useContext } from 'react';
import { ProductsContext } from '../../providers/ProductsProvider/ProductsProvider';
import { CartContext } from '../../providers/CartProvider/CartProvider';
import CategorySection from './CategorySection/CategorySection';
import MainTitle from './MainTitle/MainTitle';

const HomePage: React.FC = () => {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <MainTitle />
      {/* Products for review, delete this */}
      {products.map((product: { id: string; name: string }) => (
        <div key={product.id}>
          {product.name}
          <button type="button" onClick={() => addToCart(product.id)}>
            Add to cart
          </button>
        </div>
      ))}
      <CategorySection />
    </div>
  );
};

export default HomePage;
