import { LOGIN_SUCCESS, REGISTER_SUCCESS } from './authActions';

const initialState = {
  token: null,
  isAuthenticated: false,
  error:null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case REGISTER_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default authReducer;
