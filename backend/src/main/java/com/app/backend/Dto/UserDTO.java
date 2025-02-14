package com.app.backend.Dto;

import java.time.LocalDateTime;

import com.app.backend.Model.User;

public class UserDTO {
    private Long id;
    private String username;
    private String email;
    private String fullName;
    private String ipAddress;
    private String address;
    private LocalDateTime createdAt;
    private String accountType;

       // Constructors
       public UserDTO() {}

    public UserDTO(Long id, String username, String email, String fullName,
                   String ipAddress, String address,LocalDateTime createdAt, String accountType) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.fullName = fullName;
        this.ipAddress = ipAddress;
        this.address = address;
        this.createdAt = createdAt;
        this.accountType = accountType;
    }

    // Getters and setters

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    
    public String getIpAddress() { return ipAddress; }
    public void setIpAddress(String ipAddress) { this.ipAddress = ipAddress; }
    
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }

    public LocalDateTime getCreatedAt() { return createdAt; }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    
    public String getAccountType() { return accountType; }
    public void setAccountType(String accountType) { this.accountType = accountType; }
}