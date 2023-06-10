import BackButton from '../../components/shared/buttons/BackButton';
import Button from '../../components/shared/buttons/Button';
import ColorButton from '../../components/shared/buttons/ColorButton';
import IconButton from '../../components/shared/buttons/IconButton';
import LikeButton from '../../components/shared/buttons/LikeButton';
import MoveButton from '../../components/shared/buttons/MoveButton';

export const HomePage: React.FC = () => (
  <div>
    <h1>Home Page</h1>

    {/* Buttons for review, delete this */}
    <div
      style={{
        maxWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginLeft: 50,
      }}
    >
      <IconButton onClick={() => {}}>1</IconButton>
      <IconButton onClick={() => {}} isFilled>
        1
      </IconButton>
      <MoveButton onClick={() => {}} />
      <MoveButton onClick={() => {}} isDisabled />
      <ColorButton onClick={() => {}} color="red" />
      <ColorButton onClick={() => {}} color="blue" isSelected />
      <LikeButton onClick={() => {}} />
      <LikeButton onClick={() => {}} isSelected />
      <Button onClick={() => {}} label="Click me" />
      <Button onClick={() => {}} label="Click me" isSelected />
      <BackButton onClick={() => {}} />
    </div>
  </div>
);
