import { FC } from 'react';
import SignInSide from '../../components/SignInSide';
import classes from './signIn.module.scss';

const { register_form__container: registerFormContainer } = classes;

const SignIn: FC = () => (
  <div className={registerFormContainer}>
    <SignInSide />
  </div>
);

export default SignIn;
