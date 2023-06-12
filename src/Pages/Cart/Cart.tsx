import { useContext } from 'react';
import { CartContext } from '../../providers/CartProvider/CartProvider';

const Cart: React.FC = () => {
  const { cart, deleteFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((product) => (
        <div key={product.id}>
          {`
            id: ${product.id}
            count: ${product.count}
          `}

          <button type="button" onClick={() => deleteFromCart(product.id)}>
            Delete from cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
