import React from 'react';
import { Navigate } from 'react-router-dom';

// Recibe `isAuthenticated` como prop y `children` para renderizar la página protegida
const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // Si no está autenticado, redirigir al Home
    return <Navigate to="/" />;
  }

  // Si está autenticado, renderizar la página solicitada
  return children;
};

export default ProtectedRoute;