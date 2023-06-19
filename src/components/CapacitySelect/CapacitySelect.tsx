import { Link } from 'react-router-dom';
import BlackButton from '../shared/buttons/BlackButton/BlackButton';
import classes from './CapacitySelect.module.scss';
import { Product } from '../../types/product';

type Props = {
  title: string;
  onSelectCapacity: (choosenCapacity: string) => void;
  product: Product;
};

const CapacitySelect: React.FC<Props> = ({
  title,
  onSelectCapacity,
  product,
}) => {
  const {
    line,
    capacity__container: capacityContainer,
    capacity__body: capacityBody,
    capacity__title: capacityTitle,
    capacity__button: capacityButton,
    capacity__link: link,
  } = classes;

  return (
    <div className={capacityBody}>
      <div className={capacityTitle}>
        <p>{title}</p>
      </div>
      <div className={capacityContainer}>
        {product.phone?.capacityAvailable.map((capacity) => (
          <Link
            to={`/phones/${product?.phone?.namespaceId}-${capacity.toLowerCase()}-${product.color}`}
            key={capacity}
            className={link}
          >
            <div className={capacityButton}>
              <BlackButton
                isSelected={capacity === product.capacity}
                label={capacity}
                onClick={() => onSelectCapacity(capacity)}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={line} />
    </div>
  );
};

export default CapacitySelect;
