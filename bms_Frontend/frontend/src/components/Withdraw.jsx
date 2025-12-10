import React, { useState } from 'react';
import BankService from '../Services/BankService';
import { useNavigate } from 'react-router-dom';

const Withdraw = () => {
    const [amount, setAmount] = useState('');
    const [pin, setPin] = useState('');
    const [accountNumber, setAccountNumber] = useState(localStorage.getItem("accountNumber") || "");
    const [message, setMessage] = useState({ text: '', type: '' });
    const navigate = useNavigate();

    const handleWithdraw = (e) => {
        e.preventDefault();
        setMessage({ text: '', type: '' });

        // Matches Postman Body: { "accountNumber": "...", "amount": 2000.0, "pin": 7788 }
        const withdrawData = {
            accountNumber: accountNumber,
            amount: parseFloat(amount),
            pin: parseInt(pin)
        };

        BankService.withdraw(withdrawData).then(() => {
            setMessage({ text: "withdraw Successful! Redirecting...", type: 'success' });
            setTimeout(() => {
                navigate('/dashboard');
            }, 2000);
        }).catch(err => {
            console.error(err);
            // Show error below the form
            setMessage({ text: "Withdrawal Failed! Check PIN or Insufficient Balance.", type: 'danger' });
        });
    };

    return (
        <div className="container mt-5 pt-5">
            <div className="card col-md-6 offset-md-3 shadow">
                <div className="card-header bg-danger text-white"><h3>Withdraw Money</h3></div>
                <div className="card-body">
                    <form onSubmit={handleWithdraw}>
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
                        <div className="mb-3">
                            <label className="form-label">PIN</label>
                            <input type="password" className="form-control" 
                                value={pin} onChange={(e) => setPin(e.target.value)} required />
                        </div>

                        {/* Message Display Area */}
                        {message.text && (
                            <div className={`alert alert-${message.type} mt-3`} role="alert">
                                {message.text}
                            </div>
                        )}

                        <button className="btn btn-danger w-100">Withdraw</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Withdraw;