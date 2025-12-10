import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../Services/AuthService';

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        accountNumber: "",
        pin: ""
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setError('');
        // Backend expects 'pin' as a number, ensure conversion if necessary
        const registerData = {
            ...user,
            pin: parseInt(user.pin) 
        };

        AuthService.register(registerData).then(res => {
            // Postman Output: { "id": 1, "username": "sairam" }
            alert(`Registration Successful! Welcome ${res.data.username}`);
            navigate('/login');
        }).catch(err => {
            console.error("Registration Error", err);
            setError("Registration failed. Username might be taken or server error.");
        });
    }

    return (
        <div className="container mt-5 pt-5">
            <div className="card col-md-6 offset-md-3 shadow">
                <div className="card-header text-center bg-primary text-white"><h3>Register</h3></div>
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" name="username" className="form-control" onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Account Number</label>
                            <input type="text" name="accountNumber" className="form-control" onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">PIN</label>
                            <input type="number" name="pin" className="form-control" onChange={handleChange} required />
                        </div>
                        {/* Error Message Display */}
                        {error && (
                            <div className="text-danger text-center mb-3">
                                <strong>{error}</strong>
                            </div>
                        )}
                        <button className="btn btn-success w-100">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;