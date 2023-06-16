import BlackButton from '../shared/buttons/BlackButton/BlackButton';
import classes from './CapacitySelect.module.scss';

type Props = {
  title: string;
  capacitys?: string[];
  selectedCapacity: string;
  onSelectCapacity: (newOption: string) => void;
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

  // eslint-disable-next-line no-console
  console.log(selectedCapacity);

  return (
    <div className={capacityBody}>
      <div className={capacityTitle}>
        <p>{title}</p>
      </div>
      <div className={capacityContainer}>
        {capacitys?.map((capacity) => {
          return (
            <div className={capacityButton} key={capacity}>
              <BlackButton
                isSelected={String(capacity) === String(selectedCapacity)}
                key={capacity}
                label={String(capacity)}
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
