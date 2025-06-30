import { loginStart, loginSuccess, loginFailure } from './authSlice.js';
import { loginService } from '../services/authService';

export const loginUser = (credentials) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const user = await loginService(credentials);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message || 'Error al iniciar sesión'));
  }
};
