package com.app.backend.Controller;

import com.app.backend.Dto.LoginRequest;
import com.app.backend.Dto.LoginResponse;
import com.app.backend.Service.UserService;


import com.app.backend.Model.User;
import com.app.backend.Dto.UserDTO;


import jakarta.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

     @PostMapping("/login")
    public ResponseEntity<LoginResponse> handleLogin(@RequestBody LoginRequest request, HttpSession session) {
        System.out.println("Received login request:");
        System.out.println("Email: " + request.getEmail());
        System.out.println("Password: " + request.getPassword());
        
        // Find the matching user
        User matchingUser = userService.getAllUsers().stream()
            .filter(user -> user.getEmail().equalsIgnoreCase(request.getEmail())
                          && user.getPassword().equals(request.getPassword()))
            .findFirst()
            .orElse(null);
        
        if (matchingUser != null) {

            UserDTO userDto = new UserDTO(
                matchingUser.getId(),
                matchingUser.getUsername(),
                matchingUser.getEmail(),
                matchingUser.getFullName(), 
                matchingUser.getIpAddress(),
                matchingUser.getAddress(),
                matchingUser.getCreatedAt(),
                matchingUser.getAccountType()
            );
            
            //  Store the user in session:
            session.setAttribute("user", userDto);
            
            // Create a successful login response
            LoginResponse response = new LoginResponse(true, "Login successful", userDto);
            System.out.println("Login successful!");
            return ResponseEntity.ok(response);
        } else {
            // Create a failed login response
            LoginResponse response = new LoginResponse(false, "Invalid email or password", null);
            System.out.println("Login failed!");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
}
