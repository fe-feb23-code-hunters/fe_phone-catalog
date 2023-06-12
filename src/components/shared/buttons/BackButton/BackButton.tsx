import ArrowDark from '../../../../icons/ArrowDark';
import classes from './back-button.module.scss';

interface Props {
  label?: string;
  onClick: () => void;
}

const BackButton: React.FC<Props> = ({ label = 'Back', onClick }) => (
  <button type="button" onClick={onClick} className={classes.button}>
    <ArrowDark className={classes.icon} />
    {label}
  </button>
);

export default BackButton;
