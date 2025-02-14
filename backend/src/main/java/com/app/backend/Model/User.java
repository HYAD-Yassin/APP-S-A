package com.app.backend.Model;


import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "users") // Match the database table name
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String email;
    private String full_name;
    private String ip_address;
    private String address;
    private String account_type;


    @Column(name = "created_at")
    private LocalDateTime createdAt;    

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getFullName() {
        return full_name;
    }
    public void setFullName(String full_name) {
        this.full_name = full_name;
    }
    public String getIpAddress() {
        return ip_address;
    }
    public void setIpAddress(String ip_address) {
        this.ip_address = ip_address;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getAccountType() {
        return account_type;
    }
    public void setAccountType(String account_type) {
        this.account_type = account_type;
    }
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    
}
