import SignUpForm from "../module/signUpForm";
import SignInForm from '../module/signInForm';
import Homepage from '../module/homepage';

export const routes = [
  {
    path: '/',
    isExact: true,
    isPrivate: false,
    module: <Homepage />
  },
  {
    path: '/sign-up',
    isExact: true,
    isPrivate: false,
    module: <SignUpForm />
  },
  {
    path: '/sign-in',
    isExact: true,
    isPrivate: false,
    module: <SignInForm />
  }
]