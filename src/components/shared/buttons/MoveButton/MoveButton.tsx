import Arrow from '../../../../icons/Arrow';
import ArrowDark from '../../../../icons/ArrowDark';
import IconButton from '../IconButton';

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
      <ArrowIcon className={iconClassName} />
    </IconButton>
  );
};

export default MoveButton;
