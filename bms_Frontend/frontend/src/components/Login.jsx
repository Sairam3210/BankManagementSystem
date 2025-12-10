import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../Services/AuthService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(''); // State for storing error messages

    const handleLogin = (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        const credentials = { username, password };

        AuthService.login(credentials).then(res => {
            // Postman Output is just: true
            if (res.data === true) {
                // We must save the username manually because the response doesn't return user details, just 'true'
                localStorage.setItem("username", username);
                localStorage.setItem("logged", "true");
                navigate('/dashboard');
                window.location.reload(); // Refresh to update Header
            } else {
                setError("Invalid Username or Password"); // Set error message
            }
        }).catch(err => {
            console.error(err);
            setError("Login failed. Server might be down."); // Set network error
        });
    }

    return (
        <div className="container mt-5 pt-5">
            <div className="card col-md-6 offset-md-3 shadow">
                <div className="card-header text-center bg-primary text-white "><h3>Login</h3></div>
                <div className="card-body">
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" 
                                value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" 
                                value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        {/* Error Message Display Section */}
                        {error && (
                            <div className="alert alert-danger text-center p-1 mt-3" role="alert">
                                {error}
                            </div>
                        )}
                        <button className="btn btn-success w-100">Login</button>
                    </form>

                    <div className="mt-3 text-center">
                        <p className='mb-0'> If you Don't have an account ?
                            <Link to="/register" className='fw-bold'> Register Here </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;

