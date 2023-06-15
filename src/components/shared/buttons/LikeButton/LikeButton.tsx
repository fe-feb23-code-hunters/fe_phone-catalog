import { MouseEventHandler } from 'react';
import IconButton from '../IconButton';
import HeartOutlined from '../../../../icons/HeartOutlined';
import HeartFilled from '../../../../icons/HeartFilled';
import classes from './like-button.module.scss';

interface Props {
  isSelected?: boolean;
  isLarge?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isBiggest?: boolean;
}

const LikeButton: React.FC<Props> = ({
  isSelected,
  isLarge = true,
  onClick,
  isBiggest,
}) => {
  const HeartIcon = isSelected ? HeartFilled : HeartOutlined;

  return (
    <IconButton
      onClick={onClick}
      isLarge={isLarge}
      isBiggest={isBiggest}
    >
      <HeartIcon className={classes.icon} />
    </IconButton>
  );
};

export default LikeButton;
