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

  // const totalPrice = products.reduce(
  //   (accum, { price, count }) => accum + price * count,
  // );

  const totalPrice = products.reduce((accum, { price }) => {
    return accum + price;
  }, 0);

  return (
    <div className={container}>
      <section className={orderInfo}>
        <h3 className={orderInfoTitle}>{`Order ${id}:`}</h3>
        <OrderItem />
        <p className={orderInfoPrice}>{`Total: ${totalPrice}`}</p>
      </section>
    </div>
  );
};
