import axios, { HttpStatusCode } from 'axios';
import type { LoginCredentials, AuthResponse, User } from '../types/auth';

const authApi = axios.create({
  baseURL: 'http://localhost:30000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

const api = axios.create({
  baseURL: 'http://localhost:30000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

let memoryAccessToken: string | null = null;

export const setMemoryAccessToken = (token: string | null) => {
  memoryAccessToken = token;
};

api.interceptors.request.use((config) => {
  if (memoryAccessToken) {
    config.headers.Authorization = `Bearer ${memoryAccessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response, 
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest._retry || originalRequest.url?.includes('/refresh')) {
      return Promise.reject(error);
    }

    if (error.response && error.response.status === HttpStatusCode.Unauthorized) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await api.post('/refresh');
        const authHeader = refreshResponse.headers['authorization'] || refreshResponse.headers['x-access-token'];

        if (authHeader) {
          const newToken = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;
          setMemoryAccessToken(newToken);
          originalRequest.headers.Authorization = `Bearer ${newToken}`;

          return api(originalRequest);
        }
      } catch (refreshError) {
        setMemoryAccessToken(null);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const AuthService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await authApi.post('/login', credentials);
    const authHeader = response.headers['authorization'] || response.headers['x-access-token'];

    if (authHeader) {
      const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;
      setMemoryAccessToken(token);
    }

    return response.data;
  },

  logout: async () => {
    try {
      await authApi.post('/logout');
    } finally {
      setMemoryAccessToken(null);
    }
  },

  me: async (): Promise<User> => {
    const response = await api.get('/me');

    return response.data;
  },

  refreshToken: async (): Promise<boolean> => {
  try {
    const response = await authApi.post('/refresh');
    const authHeader = response.headers['authorization'] || response.headers['x-access-token'];
    
    if (authHeader) {
      const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;
      setMemoryAccessToken(token);

      return true;
    }
    return false;
  } catch (error) {
    setMemoryAccessToken(null);

    return false;
  }
},
};  