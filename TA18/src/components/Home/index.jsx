import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Esta es una página pública.</p>
      <Link to="/dashboard">Ir al Dashboard (Protegido)</Link>
    </div>
  );
};

export default Home;