import cn from 'classnames';
import React, { MouseEventHandler, PropsWithChildren } from 'react';
import classes from './icon-button.module.scss';

export interface IconButtonProps {
  isDisabled?: boolean;
  isSelected?: boolean;
  isFilled?: boolean;
  isLarge?: boolean;
  isBiggest?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>
}

const IconsButton: React.FC<PropsWithChildren<IconButtonProps>> = ({
  children,
  isDisabled,
  isSelected,
  isFilled,
  isLarge,
  isBiggest,
  onClick,
}) => (
  <button
    type="button"
    className={cn(classes.button, {
      [classes.disabled]: isDisabled,
      [classes.selected]: isSelected,
      [classes.filled]: isFilled,
      [classes.large]: isLarge,
      [classes.biggest]: isBiggest,
    })}
    onClick={(event) => {
      if (!isDisabled) {
        onClick(event);
      }
    }}
  >
    {children}
  </button>
);

export default IconsButton;
