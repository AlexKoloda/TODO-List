import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hook';

export const PrivateRoute = () => {
  const user = useAppSelector(state => state.user.user);
  
  return user ? <Outlet /> : <Navigate to='/sign-in' />;
};
