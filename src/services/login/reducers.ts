import { 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGIN_FAILED,
  CLEAN_LOGIN_INFO,
  TLoginActions
} from './actions';
import { setCookie } from '../../utils/utils';

const initialState: TState = {
  loginData: undefined,
  isLoading: false,
  errorText: '',
}

export type TUserLogin = {
  success: boolean,
  accessToken: string,
  refreshToken: string,
  user: {
      email: string,
      name: string
  }
}


type TState = {
  loginData: TUserLogin | undefined,
  isLoading: boolean,
  errorText: string,
}

export const loginReducer = (state: TState = initialState, action: TLoginActions): TState => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, errorText: '', }
    }
    case LOGIN_SUCCESS: {
      return { ...state, loginData: {...action.payload}, isLoading: false }
    }
    case LOGIN_FAILED: {
      return { ...state, loginData: undefined, isLoading: false, errorText: action.payload }
    }
    case CLEAN_LOGIN_INFO: {
      return { ...state, loginData: undefined, isLoading: false, errorText: '' }
    }
    default:
      return state
  }
}