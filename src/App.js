import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthenticationForm from './Components/layouts/Authentication';
import MainLayout from './Components/layouts/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<MainLayout />} />
        <Route path="/login" element={<AuthenticationForm />} />
      </Routes>
    </div>
  );
}

export default App;
