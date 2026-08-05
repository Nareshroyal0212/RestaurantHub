package com.restauranthub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.restauranthub.model.User;
import com.restauranthub.repository.UserRepository;

@RestController
@RequestMapping("/api/customers")
@CrossOrigin(origins = "http://localhost:5173")
public class CustomerController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<User>> getCustomers() {

        return ResponseEntity.ok(
                userRepository.findAll());

    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getCustomer(
            @PathVariable Long id) {

        return userRepository.findById(id)

                .<ResponseEntity<?>>map(ResponseEntity::ok)

                .orElseGet(() ->
                        ResponseEntity.badRequest()
                                .body("Customer Not Found"));

    }

    @GetMapping("/search")
    public ResponseEntity<List<User>> searchCustomer(

            @RequestParam String name) {

        return ResponseEntity.ok(

                userRepository
                        .findByFullNameContainingIgnoreCase(name));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCustomer(

            @PathVariable Long id) {

        userRepository.deleteById(id);

        return ResponseEntity.ok(
                "Customer Deleted Successfully");

    }

}