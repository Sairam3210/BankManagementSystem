import React, { useEffect, useState } from 'react';
import BankService from '../Services/BankService';

const Dashboard = () => {
    const [accountInfo, setAccountInfo] = useState(null);
    const username = localStorage.getItem("username");

    useEffect(() => {
        if(username){
            // Calls: http://localhost:9191/api/bank/balance/sairam
            BankService.getBalance(username).then((res) => {
                setAccountInfo(res.data);
                // Save accountNumber to make Deposit/Withdraw easier later
                localStorage.setItem("accountNumber", res.data.accountNumber);
            }).catch(error => console.error("Error fetching balance", error));
        }
    }, [username]);

    if (!accountInfo) return <div className="text-center mt-5">Loading Dashboard...</div>;

    return (
        <div className="container mt-5 pt-5">
             <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card text-center shadow-lg">
                        <div className="card-header bg-dark text-white">
                            <h2>Dashboard</h2>
                        </div>
                        <div className="card-body">
                            <h4 className="text-muted">Welcome, {accountInfo.user?.username}</h4>
                            <hr/>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <h5>Account Number</h5>
                                    {/* Displaying UBI4500 from your example */}
                                    <p className="text-primary fw-bold fs-4">{accountInfo.accountNumber}</p>
                                </div>
                                <div className="col-md-6">
                                    <h5>Current Balance</h5>
                                    <p className="text-success fw-bold fs-4">Rs. {accountInfo.balance}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;