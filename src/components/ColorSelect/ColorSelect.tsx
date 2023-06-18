import { Link } from 'react-router-dom';
import ColorButton from '../shared/buttons/ColorButton/ColorButton';
import classes from './ColorSelect.module.scss';
import { Product } from '../../types/product';

type Props = {
  title: string;
  id?: string;
  product: Product | null;
  onSelect: (choosenColor: string) => void;
};

type Color = 'spacegray' | 'midnightgreen' | 'black'
| 'gold' | 'white' | 'purple' | 'yellow' | 'green' | 'red'
| 'silver' | 'rosegold';

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
  rosegold: '#e0bfb8',
};

const ColorSelect: React.FC<Props> = ({
  title,
  id,
  onSelect,
  product,
}) => {
  const {
    line,
    id__text: idText,
    color__container: colorContainer,
    color__body: colorBody,
    color__title: colorTitle,
    color__button: colorButton,
    color__link: link,
  } = classes;

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
        {product?.phone?.colorsAvailable?.map((option) => {
          return (
            <Link
              to={`/phones/${product?.phone?.namespaceId}-${product?.capacity.toLowerCase()}-${option}`}
              key={option}
              className={link}
            >
              <div className={colorButton} key={option}>
                <ColorButton
                  isSelected={
                    option === product?.color
                  }
                  color={convertColor(option as Color)}
                  key={option}
                  onClick={() => onSelect(option)}
                />
              </div>
            </Link>
          );
        })}
      </div>
      <div className={line} />
    </div>
  );
};

export default ColorSelect;
