package com.bms.www.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="bmsusers")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class User {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    
    // Must be unique to work as a Foreign Key connection
    @Column(unique = true, nullable = false)
    private String username;
    
    @JsonIgnore // Hides password in API responses
    private String password;
}
