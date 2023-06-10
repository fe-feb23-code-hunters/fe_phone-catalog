import IconButton from '../IconButton';
import HeartOutlined from '../../../../icons/HeartOutlined';
import HeartFilled from '../../../../icons/HeartFilled';
import classes from './like-button.module.scss';

interface Props {
  isSelected?: boolean;
  isLarge?: boolean;
  onClick: () => void;
}

const LikeButton: React.FC<Props> = ({
  isSelected,
  isLarge = true,
  onClick,
}) => {
  const HeartIcon = isSelected ? HeartFilled : HeartOutlined;

  return (
    <IconButton onClick={onClick} isLarge={isLarge}>
      <HeartIcon className={classes.icon} />
    </IconButton>
  );
};

export default LikeButton;
