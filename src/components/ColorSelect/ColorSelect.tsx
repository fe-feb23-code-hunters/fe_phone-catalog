import ColorButton from '../shared/buttons/ColorButton/ColorButton';
import classes from './ColorSelect.module.scss';
import { colorSelect } from '../../types/colorSelect';

type Props = {
  title: string;
  options: colorSelect[];
  selectedOption: colorSelect;
  onSelect: (newOption: colorSelect) => void;
};

const ColorSelect: React.FC<Props> = ({
  title,
  options,
  selectedOption,
  onSelect,
}) => {
  const {
    line,
    color__container: colorContainer,
    color__body: colorBody,
    color__title: colorTitle,
    color__button: colorButton,
  } = classes;

  return (
    <div className={colorBody}>
      <div className={colorTitle}>
        <p>{title}</p>
      </div>
      <div className={colorContainer}>
        {options.map((option) => {
          return (
            <div className={colorButton}>
              <ColorButton
                isSelected={option.color === selectedOption.color}
                color={option.color}
                key={option.color}
                onClick={() => onSelect(option)}
              />
            </div>
          );
        })}
      </div>
      <div className={line} />
    </div>
  );
};

export default ColorSelect;
