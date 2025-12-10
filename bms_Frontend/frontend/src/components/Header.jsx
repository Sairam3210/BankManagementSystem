import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("logged");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black.bg-gradient fixed-top shadow">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">BankApp</Link>
        <div className="collapse navbar-collapse">
          {isAuth ? (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link bg-dark bg-gradient rounded-pill px-3 me-2 mt-2 text-white" to="/dashboard">Dashboard</Link></li>
              <li className="nav-item"><Link className="nav-link bg-dark bg-gradient rounded-pill px-2 me-2 mt-2 text-white" to="/deposit">Deposit</Link></li>
              <li className="nav-item"><Link className="nav-link bg-dark bg-gradient rounded-pill px-3 me-2 mt-2 text-white" to="/withdraw">Withdraw</Link></li>
              <li className="nav-item ms-3">
                <button className="btn btn-outline-light btn-sm rounded-pill px-3 me-2 mt-2" onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          ) : (
             <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link bg-dark bg-gradient rounded-pill px-3 me-2 mt-1 text-white" to="/login">Login</Link></li>
                <li className="nav-item"><Link className="nav-link bg-dark bg-gradient rounded-pill px-3 me-2 mt-1 text-white" to="/register">Register</Link></li>
             </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;