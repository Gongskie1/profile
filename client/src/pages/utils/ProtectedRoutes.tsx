// src/pages/utils/ProtectedRoutes.tsx
import useAuth from './context-api/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
