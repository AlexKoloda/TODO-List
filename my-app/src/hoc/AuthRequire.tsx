import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hook';
import { selectUser } from '../store/selectors';

export const PrivateRoute = () => {
  const user = useAppSelector(selectUser);
  
  return user ? <Outlet /> : <Navigate to='/sign-in' />;
};
