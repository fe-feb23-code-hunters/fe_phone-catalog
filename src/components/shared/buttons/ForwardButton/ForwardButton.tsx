import Arrow from '../../../../icons/Arrow/Arrow';
import classes from './ForwardButton.module.scss';

interface Props {
  label?: string;
  onClick: () => void;
}

const ForwardButton: React.FC<Props> = ({ label = 'Forward', onClick }) => (
  <button type="button" onClick={onClick} className={classes.button}>
    <Arrow className={classes.icon} />
    {label}
  </button>
);

export default ForwardButton;
