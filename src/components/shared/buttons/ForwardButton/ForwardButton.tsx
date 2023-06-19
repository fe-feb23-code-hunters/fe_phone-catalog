import cn from 'classnames';
import Arrow from '../../../../icons/Arrow/Arrow';
import classes from './ForwardButton.module.scss';

interface Props {
  label?: string;
  onClick?: () => void;
}

const ForwardButton: React.FC<Props> = ({ label = 'Forward', onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(classes.button, {
      [classes.disabled]: !onClick,
    })}
    disabled={!onClick}
  >
    <Arrow className={classes.icon} />
    {label}
  </button>
);

export default ForwardButton;
