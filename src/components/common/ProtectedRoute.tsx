import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { UseAuth } from '../../context/AuthContext';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = UseAuth();

  console.log("ProtectedRoute status -> isLoading:", isLoading, "isAuthenticated:", isAuthenticated);
  // 1. If still checking auth status, show a loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 2. If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 3. If authenticated, render the protected component
  return children;
};

export default ProtectedRoute;  