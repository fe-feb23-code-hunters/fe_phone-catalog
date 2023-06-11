import { useContext } from 'react';
// eslint-disable-next-line max-len
import { ProductsContext } from '../../providers/ProductsProvider/ProductsProvider';

const HomePage: React.FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <h1>Home Page</h1>

      {/* Products for review, delete this */}
      {products.map((product: any) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default HomePage;
