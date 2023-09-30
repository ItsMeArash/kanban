import useAuth from 'hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const RequiredAuth = () => {
  const { auth } = useAuth();

  return auth?.email ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default RequiredAuth;
