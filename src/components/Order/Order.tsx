import { OrderItem } from '../OrderItem';
import classes from './Order.module.scss';

const {
  container,
  order,
  order__title: orderTitle,
  order__price: orderPrice,
} = classes;

export const Order = () => {
  return (
    <div className={container}>
      <section className={order}>
        <h3 className={orderTitle}>Order 1:</h3>
        <OrderItem />
        <p className={orderPrice}>Total: $1000</p>
      </section>
    </div>
  );
};
