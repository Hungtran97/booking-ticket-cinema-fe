import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './Components/layouts/Login';
import MainLayout from './Components/layouts/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<MainLayout />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
