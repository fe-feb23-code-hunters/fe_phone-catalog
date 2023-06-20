import { FC } from 'react';
import SignInSide from '../../components/SignInSide';
import classes from './signIn.module.scss';

const { auth_form__container: authFormContainer } = classes;

const SignIn: FC = () => (
  <div className={authFormContainer}>
    <SignInSide />
  </div>
);

export default SignIn;
