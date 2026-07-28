import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import type { AuthContextType, AuthState, LoginCredentials } from '../types/auth';
import { AuthService } from '../services/AuthService';

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  error: null,
  user: null,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<AuthState>(initialState);
  const navigate = useNavigate();
  const location = useLocation();

  const updateAuthState = (newState: Partial<AuthState>) => {
    setState((prev) => ({...prev, ...newState}));
  };

  const fetchUserSession = useCallback(async () => {
    try {
      const refreshed = await AuthService.refreshToken();

      if (!refreshed) {
        updateAuthState({ user: null, isAuthenticated: false, isLoading: false });
        navigate('/login', { replace: true });

        return;
      }

      const userData = await AuthService.me();

      updateAuthState({ 
          isAuthenticated: true, 
          isLoading: false,
          user: userData
        });
    } catch (err) {
      console.error("Auth check failed:", err);
      updateAuthState({ isAuthenticated: false, isLoading: false, user: null });
      navigate('/login', { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    const isPublicRoute = location.pathname === '/login' || location.pathname === '/register';

    if (isPublicRoute) {
      updateAuthState({ isLoading: false });

      return;
    };

    fetchUserSession();
  }, [location.pathname, fetchUserSession]);

  const login = async (credentials: LoginCredentials) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await AuthService.login(credentials);

      setState({ isAuthenticated: true, isLoading: false, error: null, user: response.data });
      navigate('/dashboard')
    } catch (err) {
      setState({ isAuthenticated: false, isLoading: false, error: (err as Error).message, user: null });
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
    } finally {
      setState(initialState);
      navigate('/login');
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
};