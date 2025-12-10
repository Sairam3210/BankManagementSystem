package com.bms.www.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bms.www.model.Account;
import com.bms.www.model.User;
import com.bms.www.register.RegisterRequest;
import com.bms.www.repo.AccountRepository;
import com.bms.www.repo.UserRepository;


@Service
public class AuthService {

    @Autowired
    UserRepository userRepository;
    
    @Autowired
    AccountRepository accountRepository; // Inject AccountRepository

    // Method to handle user login
    public boolean login(String username, String password) {
        User user = userRepository.findByUsername(username);

        if (user == null) {
            return false;
        }
        return user.getPassword().equals(password);
    }
    
    // Method to handle user registration (User Onboarding)
    public User register(RegisterRequest request) {
        // 1. Check if username exists
        if(userRepository.findByUsername(request.getUsername()) != null) {
            throw new RuntimeException("Username already exists");
        }

        // 2. Create and Save the User
        User newUser = new User();
        newUser.setUsername(request.getUsername());
        newUser.setPassword(request.getPassword());
        
        User savedUser = userRepository.save(newUser);

        // 3. Create Account with USER PROVIDED details
        Account newAccount = new Account();
        
        // Use the values from the request
        newAccount.setAccountNumber(request.getAccountNumber()); 
        newAccount.setPin(request.getPin());
        
        newAccount.setBalance(0.0); // Balance is still 0 initially
        newAccount.setUser(savedUser); // Link to the user

        // 4. Save the Account
        accountRepository.save(newAccount);

        return savedUser;
    }
}