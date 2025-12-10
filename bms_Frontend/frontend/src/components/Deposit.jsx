import React, { useState } from 'react';
import BankService from '../Services/BankService';
import { useNavigate } from 'react-router-dom';

const Deposit = () => {
    const [amount, setAmount] = useState('');
    // Auto-fill account number from local storage if available, or let user type
    const [accountNumber, setAccountNumber] = useState(localStorage.getItem("accountNumber") || "");
    const [message, setMessage] = useState({ text: '', type: '' }); // State for success/error messages
    const navigate = useNavigate();

    const handleDeposit = (e) => {
        e.preventDefault();
        setMessage({ text: '', type: '' }); // Clear previous messages

        const depositData = {
            accountNumber: accountNumber,
            amount: parseFloat(amount)
        };

        BankService.deposit(depositData).then(() => {
            // Success: Show green message
            setMessage({ text: "Deposit Successful! Redirecting...", type: 'success' });
            
            // Redirect after a short delay so user sees the message
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
            
        }).catch(err => {
            console.error(err);
            // Error: Show red message
            setMessage({ text: "Deposit Failed! Check Account Number or Internet Connection.", type: 'danger' });
        });
    };

    return (
        <div className="container mt-5 pt-5">
            <div className="card col-md-6 offset-md-3 shadow">
                <div className="card-header bg-success text-white"><h3>Deposit Money</h3></div>
                <div className="card-body">
                    <form onSubmit={handleDeposit}>
                        <div className="mb-3">
                            <label className="form-label">Account Number</label>
                            <input type="text" className="form-control" 
                                value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Amount</label>
                            <input type="number" className="form-control" 
                                value={amount} onChange={(e) => setAmount(e.target.value)} required />
                        </div>

                        {/* Message Display Area */}
                        {message.text && (
                            <div className={`alert alert-${message.type} mt-3 text-center`} role="alert">
                                {message.text}
                            </div>
                        )}

                        <button className="btn btn-success w-100 mt-2">Deposit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Deposit;