import ColorButton from '../shared/buttons/ColorButton/ColorButton';
import classes from './ColorSelect.module.scss';

type Props = {
  title: string;
  id?: string;
  options?: string[];
  selectedOption?: string;
  onSelect: (newOption: string) => void;
};

type Color = 'spacegray' | 'midnightgreen' | 'black'
| 'gold' | 'white' | 'purple' | 'yellow' | 'green' | 'red'
| 'silver';

const colors: Record<Color, string> = {
  midnightgreen: '#5f7170',
  black: '#4c4c4c',
  gold: '#fcdbc1',
  red: '#c20000',
  purple: '#800080',
  yellow: '#ffff00',
  green: '#00ad00',
  spacegray: '#d6d4d4',
  white: '#fffff',
  silver: '#ebe8e8',
};

const ColorSelect: React.FC<Props> = ({
  title,
  options,
  selectedOption,
  id,
  onSelect,
}) => {
  const {
    line,
    id__text: idText,
    color__container: colorContainer,
    color__body: colorBody,
    color__title: colorTitle,
    color__button: colorButton,
  } = classes;

  // eslint-disable-next-line no-console
  console.log(selectedOption);

  const convertColor = (option: Color): string => {
    if (option in colors) {
      return colors[option];
    }

    return option;
  };

  return (
    <div className={colorBody}>
      <div className={colorTitle}>
        <p>{title}</p>
        <p className={idText}>{id}</p>
      </div>
      <div className={colorContainer}>
        {options?.map((option) => {
          return (
            <div className={colorButton} key={option}>
              <ColorButton
                isSelected={
                  option === selectedOption
                }
                color={convertColor(option as Color)}
                key={option}
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
