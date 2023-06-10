import cn from 'classnames';
import React from 'react';
import classes from './button.module.scss';

interface Props {
  label: string;
  onClick: () => void;
  isHightlited?: boolean;
}

const Button: React.FC<Props> = ({ label, onClick, isHightlited }) => (
  <button
    type="button"
    className={cn(classes.button, {
      [classes.higlighted]: isHightlited,
    })}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
