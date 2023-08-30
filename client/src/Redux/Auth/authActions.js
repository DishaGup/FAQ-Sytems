import axios from 'axios';

// Action Types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

// Action Creators
export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

// Async Actions
export const loginUser = (form_data) => async (dispatch) => {
  try {
    const response = await axios.post(`${backend_url}/api/user/login`, form_data);
    const { token } = response.data;
    dispatch(loginSuccess(token));
  } catch (error) {
    console.log(error)
  }
};

export const registerUser = (email, password, role) => async (dispatch) => {
  try {
    await axios.post(`${backend_url}/api/user/register`, { email, password, role });
    dispatch(registerSuccess());
  } catch (error) {
    // Handle error
  }
};
