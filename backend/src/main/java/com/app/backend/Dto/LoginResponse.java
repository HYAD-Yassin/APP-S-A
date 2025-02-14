package com.app.backend.Dto;

public class LoginResponse {
    private boolean success;
    private String message;
    private UserDTO user;

    // Constructors
    public LoginResponse() {}

    public LoginResponse(boolean success, String message, UserDTO user) {
        this.success = success;
        this.message = message;
        this.user = user;
    }

    // Getters and setters
    
    public boolean isSuccess() { return success; }
    public void setSuccess(boolean success) { this.success = success; }
    
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    
    public UserDTO getUser() { return user; }
    public void setUser(UserDTO user) { this.user = user; }
}
