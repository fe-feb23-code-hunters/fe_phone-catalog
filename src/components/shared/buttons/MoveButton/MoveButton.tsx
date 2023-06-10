import cn from 'classnames';
import Arrow from '../../../../icons/Arrow';
import ArrowDark from '../../../../icons/ArrowDark';
import IconButton from '../IconButton';
import classes from './move-button.module.scss';

interface Props {
  isDisabled?: boolean;
  iconClassName?: string;
  onClick: () => void;
}

const MoveButton: React.FC<Props> = ({
  isDisabled,
  iconClassName,
  onClick,
}) => {
  const ArrowIcon = isDisabled ? Arrow : ArrowDark;

  return (
    <IconButton isDisabled={isDisabled} onClick={onClick}>
      <ArrowIcon className={cn(iconClassName, classes.icon)} />
    </IconButton>
  );
};

export default MoveButton;
