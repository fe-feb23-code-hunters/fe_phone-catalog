import { Order as OrderType } from '../../types/order';
import { OrderItem } from '../OrderItem';
import classes from './Order.module.scss';

const {
  container,
  'order-info': orderInfo,
  'order-info__title': orderInfoTitle,
  'order-info__price': orderInfoPrice,
} = classes;

interface Props {
  order: OrderType;
}

export const Order: React.FC<Props> = ({ order }) => {
  const { id, products } = order;

  const totalPrice = products.reduce((accum, product) => {
    const count = product.ProductOrder?.count || 1;

    return accum + (product.price * count);
  }, 0);

  return (
    <div className={container}>
      <section className={orderInfo}>
        <h3 className={orderInfoTitle}>{`Order ${id}:`}</h3>
        {products.map((orderItem) => (
          <OrderItem key={orderItem.id} product={orderItem} />
        ))}
        <p className={orderInfoPrice}>{`Total: $${totalPrice}`}</p>
      </section>
    </div>
  );
};
