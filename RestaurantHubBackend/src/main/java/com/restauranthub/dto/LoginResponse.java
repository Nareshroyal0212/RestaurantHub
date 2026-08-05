package com.restauranthub.dto;

public class LoginResponse {

    private String token;
    private String message;
    private String role;
    private String fullName;
    private String email;

    public LoginResponse() {
    }

    public LoginResponse(String token, String message, String role,
            String fullName, String email) {
        this.token = token;
        this.message = message;
        this.role = role;
        this.fullName = fullName;
        this.email = email;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}