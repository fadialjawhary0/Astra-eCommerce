import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./views/home/Home.jsx'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
