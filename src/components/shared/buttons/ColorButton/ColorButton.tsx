import cn from 'classnames';
import classes from './color-button.module.scss';

interface Props {
  isSelected?: boolean;
  color?: string;
  onClick: () => void;
}

const ColorButton: React.FC<Props> = ({
  isSelected,
  color = '#5f7170',
  onClick,
}) => (
  <button
    type="button"
    className={cn(classes.button, { [classes.selected]: isSelected })}
    onClick={onClick}
  >
    <div className={classes.innerCircle} style={{ backgroundColor: color }} />
  </button>
);

export default ColorButton;
