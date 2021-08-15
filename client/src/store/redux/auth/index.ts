import { Action } from './types';
import {
  LOG_OUT_ACCOUNT,
  SIGN_IN_ACCOUNT,
  SIGN_UP_ACCOUNT
} from './actionTypes';
import { UserAccount } from '../../../models';

export interface AuthState {
  allAccount: UserAccount[],
  authAccount?: UserAccount,
  isLogged: boolean,
  authSuccess?: string | null,
  authError?: string | null
}

const authState: AuthState = {
  allAccount: [
    {
      id: '',
      firstName: 'Admin',
      lastName: '',
      username: 'root',
      password: 'admin'
    }
  ],
  isLogged: false,
  authError: null,
  authSuccess: null
};

const authReducer = (state = authState, action: Action): AuthState => {
  switch (action.type) {
    case SIGN_UP_ACCOUNT:
      return action.payload.error ? {
        ...state,
        authError: action.payload.error
      } : {
        ...state,
        allAccount: [
          ...state.allAccount,
          action.payload.account
        ],
        authError: action.payload.error,
        authSuccess: action.payload.success
      }
    case SIGN_IN_ACCOUNT:
      return action.payload.error ? {
        ...state,
        authError: action.payload.error,
        isLogged: false,
        authAccount: action.payload.account
      } : {
        ...state,
        authAccount: action.payload.account,
        authError: action.payload.error,
        isLogged: true
      }
    case LOG_OUT_ACCOUNT:
      return {
        ...authState,
        allAccount: [
          ...state.allAccount
        ]
      }
    default:
      return state;
  }
};

export default authReducer;