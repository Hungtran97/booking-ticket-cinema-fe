import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './Components/layouts/Main';
import Login from 'Components/layouts/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<MainLayout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
