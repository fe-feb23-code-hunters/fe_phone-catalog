import Email from '../../icons/Email/Email';
import classes from './CopyButton.module.scss';

type Props = {
  value: string;
};

const CopyButton: React.FC<Props> = ({ value }) => {
  const {
    button__icon: buttonIcon,
    tooltipText,
  } = classes;

  return (
    <button
      type="button"
      className={buttonIcon}
      onClick={() => navigator.clipboard.writeText(`${value}`)}
    >
      <Email />
      <span className={tooltipText}>Click to copy email</span>
    </button>
  );
};

export default CopyButton;
