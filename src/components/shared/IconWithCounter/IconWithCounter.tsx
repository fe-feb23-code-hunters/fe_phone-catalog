import React, { PropsWithChildren } from 'react';
import classes from './icon-with-counter.module.scss';

interface Props {
  count: number;
}

const IconWithCounter: React.FC<PropsWithChildren<Props>> = ({
  count,
  children,
}) => {
  const countLabel = count > 99 ? 99 : count;

  return (
    <div className={classes.container}>
      {children}

      <div className={classes.counter}>
        <span className={classes.label}>{countLabel}</span>
      </div>
    </div>
  );
};

export default IconWithCounter;
