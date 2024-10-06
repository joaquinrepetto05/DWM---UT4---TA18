import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  // Simular estado de autenticación
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta pública */}
          <Route path="/" element={<Home />} />

          {/* Ruta protegida */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Routes>
        
        {/* Botón para simular inicio/cierre de sesión */}
        <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
          {isAuthenticated ? 'Cerrar Sesión' : 'Iniciar Sesión'}
        </button>
      </div>
    </Router>
  );
}

export default App;