import Home from 'Components/Home';
import Users from 'Components/Users';
import Login from 'layouts/Login';
import Main from 'layouts/Main';
import NotFound from 'layouts/NotFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}>
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
