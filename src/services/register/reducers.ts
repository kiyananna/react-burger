import { 
  REGISTER_REQUEST, 
  REGISTER_SUCCESS, 
  REGISTER_FAILED,
  TRegisterActions
} from './actions';

const initialState: TRegisterState = {
  response: null,
  isLoading: false,
  errorText: '',
}

export const registerReducer = (state: TRegisterState = initialState, action: TRegisterActions): TRegisterState => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return { ...state, isLoading: true, errorText: '', }
    }
    case REGISTER_SUCCESS: {
      return { ...state, response: {...action.payload}, isLoading: false }
    }
    case REGISTER_FAILED: {
      return { ...state, response: null, isLoading: false, errorText: action.payload }
    }
    default:
      return state
  }
}


type TRegisterState = {
  response: {} | null,
  isLoading: boolean,
  errorText: string
}