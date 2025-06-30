import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../slices/authThunks';
import { logout } from '../slices/authSlice';

export const useAuth = () => {
  const { user, isAuthenticated, loading, error } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const login = (credentials) => dispatch(loginUser(credentials));
  const logoutUser = () => dispatch(logout());

  return { user, isAuthenticated, loading, error, login, logoutUser };
};
