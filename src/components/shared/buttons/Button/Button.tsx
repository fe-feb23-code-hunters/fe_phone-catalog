import cn from 'classnames';
import React, { MouseEventHandler } from 'react';
import classes from './button.module.scss';

interface Props {
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isSelected?: boolean;
  height?: string;
}

const Button: React.FC<Props> = ({
  label,
  onClick,
  isSelected,
  height,
}) => (
  <button
    type="button"
    style={{ height }}
    className={cn(classes.button, {
      [classes.higlighted]: isSelected,
    })}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
