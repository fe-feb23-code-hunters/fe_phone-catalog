import { useContext } from 'react';
// eslint-disable-next-line max-len
import { ProductsContext } from '../../providers/ProductsProvider/ProductsProvider';
import { CartContext } from '../../providers/CartProvider/CartProvider';
import Dropdown from '../../components/shared/Dropdown';

const HomePage: React.FC = () => {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Home Page</h1>

      {/* Products for review, delete this */}
      {products.map((product: { id: string; name: string }) => (
        <div key={product.id}>
          {product.name}
          <button type="button" onClick={() => addToCart(product.id)}>
            Add to cart
          </button>
        </div>
      ))}

      <Dropdown
        options={[
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' },
        ]}
        label="Description"
      />
    </div>
  );
};

export default HomePage;
