import { Capacitys } from '../../types/capacitys';
import BlackButton from '../shared/buttons/BlackButton/BlackButton';
import classes from './CapacitySelect.module.scss';

type Props = {
  title: string;
  capacitys: Capacitys[];
  selectedCapacity: Capacitys;
  onSelectCapacity: (newOption: Capacitys) => void;
};

const CapacitySelect: React.FC<Props> = ({
  title,
  capacitys,
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
        {capacitys?.map((capacity) => {
          return (
            <div className={capacityButton}>
              <BlackButton
                isSelected={capacity.value === selectedCapacity.value}
                key={capacity.value}
                label={capacity.value}
                onClick={() => onSelectCapacity(capacity)}
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
