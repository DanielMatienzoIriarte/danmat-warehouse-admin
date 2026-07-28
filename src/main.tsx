import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import LoginForm from './components/signin/LoginForm';
import Dashboard from './components/admin/dashboard';
import ProtectedRoute from './components/common/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginForm />} />

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }/>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
