import { combineReducers } from 'redux';
import authReducer, { AuthState } from './redux/auth';

export interface RootState {
  auth: AuthState
}

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;