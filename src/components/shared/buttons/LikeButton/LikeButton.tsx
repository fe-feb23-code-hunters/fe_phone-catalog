import IconButton from '../IconButton';
import HeartOutlined from '../../../../icons/HeartOutlined';
import HeartFilled from '../../../../icons/HeartFilled';

interface Props {
  isSelected?: boolean;
  isLarge?: boolean;
  onClick: () => void;
}

const LikeButton: React.FC<Props> = ({
  isSelected,
  isLarge = true,
  onClick,
}) => (
  <IconButton onClick={onClick} isLarge={isLarge}>
    {isSelected ? <HeartFilled /> : <HeartOutlined />}
  </IconButton>
);

export default LikeButton;
