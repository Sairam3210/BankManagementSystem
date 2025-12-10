import axios from 'axios';

const BANK_BASE_URL = "http://localhost:9191/api/bank";

class BankService {
    
    // GET URL: http://localhost:9191/api/bank/balance/{username}
    getBalance(username) {
        return axios.get(`${BANK_BASE_URL}/balance/${username}`);
    }

    // POST Body: { accountNumber, amount }
    deposit(transactionData) {
        return axios.post(`${BANK_BASE_URL}/deposit`, transactionData);
    }

    // POST Body: { accountNumber, amount, pin }
    withdraw(transactionData) {
        return axios.post(`${BANK_BASE_URL}/withdraw`, transactionData);
    }
}

export default new BankService();