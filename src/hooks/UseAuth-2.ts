import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { LoginCredentials, AuthState } from '../types/auth';
import { AuthService } from '../services/AuthService';
import axios from 'axios';

export const UseAuth2 = () => {
  const [state, setState] = useState<AuthState>({
    isAuthenticated: false,
    isLoading: false,
    error: null,
    user: null,
  });
  const navigate = useNavigate();

  const login = async (credentials: LoginCredentials) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const data = await AuthService.login(credentials);
      console.log('dashboard1', state.isAuthenticated);

      setState(prev => ({
        ...prev,
        isAuthenticated: true, 
        isLoading: false,
        user: data.data 
      }));
      console.log('dashboard2', state.isAuthenticated);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login caught error:', err);
      const message = axios.isAxiosError(err) 
        ? (err.response?.data?.message || 'Login failed')
        : 'An unexpected error occurred';

      setState({ 
        isAuthenticated: false, 
        isLoading: false, 
        error: message, 
        user: null 
      });
    }
  };

  const logout = async() => {
    setState((prev) => ({...prev, isLoading:true}));

    try {
      await AuthService.logout();
    } catch (error) {
      console.log("logout failed");
    } finally {
      setState({
        isAuthenticated: false,
        isLoading: false,
        error: null,
        user: null
      });
    }
  };

  return { ...state, login, logout };
};