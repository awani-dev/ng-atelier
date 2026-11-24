package com.restaurants.manager.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest request) {
        if ("admin".equals(request.username()) && "123".equals(request.password())) {
            return new LoginResponse("admin", List.of("ADMIN"));
        }
        if ("yasin".equals(request.username()) && "123".equals(request.password())) {
            return new LoginResponse("yasin", List.of("USER"));
        }
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password");
    }

    public record LoginRequest(String username, String password) {
    }

    public record LoginResponse(String username, List<String> roles) {
    }
}
