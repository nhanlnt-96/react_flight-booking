import {
  LOG_OUT_ACCOUNT,
  SIGN_IN_ACCOUNT,
  SIGN_UP_ACCOUNT
} from './actionTypes';
import store from '../../store';

export const signUpAccount = (signUpValue: any) => {
  const auth = store.getState().auth;
  const id = require('crypto').randomBytes(64).toString("hex");
  const userCheck = auth.allAccount.find((val) => val.username === signUpValue.username);
  if (userCheck) {
    return {
      type: SIGN_UP_ACCOUNT,
      payload: {
        error: 'Username already exist. Please try again',
        success: null
      }
    }
  }
  return {
    type: SIGN_UP_ACCOUNT,
    payload: {
      error: null,
      account: {
        id,
        firstName: signUpValue.firstName,
        lastName: signUpValue.lastName,
        username: signUpValue.username,
        password: signUpValue.password
      },
      success: 'Signed up successful.'
    }
  }
};

export const signInAccount = (signInValue: any) => {
  const auth = store.getState().auth;
  const userCheck = auth.allAccount.find((val) => val.username === signInValue.username && val.password === signInValue.password);
  if (userCheck) {
    const { username, firstName, lastName } = userCheck;
    return {
      type: SIGN_IN_ACCOUNT,
      payload: {
        error: null,
        account: {
          username,
          firstName,
          lastName
        },
        success: 'Signed in successful.'
      }
    }
  }
  return {
    type: SIGN_IN_ACCOUNT,
    payload: {
      error: 'Invalid username or password. Please try again.',
      success: null,
      account: userCheck
    }
  }
};

export const logOutAccount = () => {
  return {
    type: LOG_OUT_ACCOUNT
  }
};