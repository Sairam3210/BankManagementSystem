package com.bms.www.register;

import lombok.Data;

@Data
public class RegisterRequest {
	
	    private String username;
	    private String password;
	    private String accountNumber; // Input from user
	    private int pin;              // Input from user
}
