import React from 'react';
import Main from './Components/layout/Main';
import { Route, Routes } from 'react-router-dom';
import AuthenticationForm from './Components/layout/Authentication';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Main />} />
        <Route path="/login" element={<AuthenticationForm />} />
      </Routes>
    </div>
  );
}

export default App;
