import { FC } from 'react';
import classes from './signUp.module.scss';
import ResetForm from '../../components/ResetForm';

const { reset_form__container: resetFormContainer } = classes;

const ResetPassword: FC = () => (
  <div className={resetFormContainer}>
    <ResetForm />
  </div>
);

export default ResetPassword;
