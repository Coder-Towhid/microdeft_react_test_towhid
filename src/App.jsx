
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css'
import Register from './pages/Registration/Register';
import Login from './pages/Login/login';
import Home from './pages/Home/Home';

function App() {

  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const handleSetToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route path="/" element={token ? <Navigate to="/" replace /> : <Navigate to="/register" replace />} />

        {/* Register route */}
        <Route path="/register" element={<Register />} />

        {/* Login route */}
        <Route path="/login" element={<Login setToken={handleSetToken} />} />

        {/* Homepage route */}
        <Route path="/" element={token ? <Home token={token} /> : <Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
