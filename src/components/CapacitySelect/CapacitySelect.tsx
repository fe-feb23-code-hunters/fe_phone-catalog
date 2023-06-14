import { Capacity } from '../../types/capacity';
import BlackButton from '../shared/buttons/BlackButton/BlackButton';
import classes from './CapacitySelect.module.scss';

type Props = {
  title: string;
  values: Capacity[];
  selectedCapacity: Capacity;
  onSelectCapacity: (newOption: Capacity) => void;
};

const CapacitySelect: React.FC<Props> = ({
  title,
  values,
  selectedCapacity,
  onSelectCapacity,
}) => {
  const {
    line,
    capacity__container: capacityContainer,
    capacity__body: capacityBody,
    capacity__title: capacityTitle,
    capacity__button: capacityButton,
  } = classes;

  return (
    <div className={capacityBody}>
      <div className={capacityTitle}>
        <p>{title}</p>
      </div>
      <div className={capacityContainer}>
        {values.map((value) => {
          return (
            <div className={capacityButton}>
              <BlackButton
                isSelected={value.value === selectedCapacity.value}
                key={value.value}
                label={value.value}
                onClick={() => onSelectCapacity(value)}
              />
            </div>
          );
        })}
      </div>
      <div className={line} />
    </div>
  );
};

export default CapacitySelect;
