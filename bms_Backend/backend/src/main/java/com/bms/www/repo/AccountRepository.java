package com.bms.www.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bms.www.model.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
    // New method to find by account number
    Account findByAccountNumber(String accountNumber);
    
    // Existing method to find by username 
    Account findByUserUsername(String username);
}