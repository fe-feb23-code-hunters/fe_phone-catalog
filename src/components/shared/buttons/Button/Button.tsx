import cn from 'classnames';
import React from 'react';
import classes from './button.module.scss';

interface Props {
  label: string;
  onClick: () => void;
  isSelected?: boolean;
}

const Button: React.FC<Props> = ({ label, onClick, isSelected }) => (
  <button
    type="button"
    className={cn(classes.button, {
      [classes.higlighted]: isSelected,
    })}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
