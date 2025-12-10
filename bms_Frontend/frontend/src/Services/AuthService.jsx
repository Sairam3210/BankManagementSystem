import axios from 'axios';

const AUTH_BASE_URL = "http://localhost:9191/api/auth";

class AuthService {
    
    // Matches your Postman Register Body: { username, password, accountNumber, pin }
    register(user) {
        return axios.post(`${AUTH_BASE_URL}/register`, user);
    }

    // Matches your Postman Login Body: { username, password }
    login(credentials) {
        return axios.post(`${AUTH_BASE_URL}/login`, credentials);
    }
}

export default new AuthService();