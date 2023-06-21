/* eslint-disable max-len */
import classes from './ErrorItem.module.scss';

const {
  container,
  message,
} = classes;

export const ErrorItem = () => {
  return (
    <div className={container}>
      <p className={message}>
        Sorry, we are currently unable to load your orders. Please try again later.
        If the issue persists, contact our support team for assistance.
      </p>
    </div>
  );
};
