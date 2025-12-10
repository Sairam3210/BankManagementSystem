import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'; Ensure you have your background styling here

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';

// Protects routes so only logged-in users can access them
const PrivateRoute = ({ children }) => {
    const isAuth = localStorage.getItem("logged");
    return isAuth ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Header />
        
        {/* Main Content Area */}
        <div className="content-wrap">
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Private/Protected Routes */}
                <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/deposit" element={<PrivateRoute><Deposit /></PrivateRoute>} />
                <Route path="/withdraw" element={<PrivateRoute><Withdraw /></PrivateRoute>} />
            </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;