package com.restauranthub.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.restauranthub.dto.ApiResponse;
import com.restauranthub.dto.LoginRequest;
import com.restauranthub.dto.LoginResponse;
import com.restauranthub.dto.RegisterRequest;
import com.restauranthub.model.User;
import com.restauranthub.repository.UserRepository;
import com.restauranthub.util.JwtUtil;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    // ==========================
    // REGISTER
    // ==========================
    public ApiResponse register(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            return new ApiResponse(false, "Email already exists");
        }

        if (userRepository.existsByPhone(request.getPhone())) {
            return new ApiResponse(false, "Phone number already exists");
        }

        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole("USER");

        userRepository.save(user);

        return new ApiResponse(true, "Registration Successful");
    }

    // ==========================
    // LOGIN
    // ==========================
    public LoginResponse login(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid Email"));

        if (!passwordEncoder.matches(
                request.getPassword(),
                user.getPassword())) {

            throw new RuntimeException("Invalid Password");
        }

        String token = jwtUtil.generateToken(user.getEmail());

        return new LoginResponse(
                token,
                "Login Successful",
                user.getRole(),
                user.getFullName(),
                user.getEmail());

    }

}