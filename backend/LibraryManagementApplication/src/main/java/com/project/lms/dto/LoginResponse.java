// src/main/java/com.example.library.dto.LoginResponse.java

package com.project.lms.dto;

public class LoginResponse {

    private String token;

    // Constructors, getters, and setters
    // ...

    public LoginResponse() {
    }

    public LoginResponse(String token) {
        this.token = token;
    }

    // Getters and Setters
    // ...

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
