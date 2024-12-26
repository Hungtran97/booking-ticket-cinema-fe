import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './layouts/Main';
import Login from 'layouts/Login';
import Users from 'Components/Users';
import Home from 'Components/Home';
import NotFound from 'layouts/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
