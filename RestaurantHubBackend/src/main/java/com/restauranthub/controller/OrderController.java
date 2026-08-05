package com.restauranthub.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.restauranthub.model.Order;
import com.restauranthub.service.OrderService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public ResponseEntity<Order> placeOrder(
            @RequestBody Order order) {

        return ResponseEntity.ok(
                orderService.placeOrder(order));

    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {

        return ResponseEntity.ok(
                orderService.getAllOrders());

    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderById(
            @PathVariable Long id) {

        Optional<Order> order =
                orderService.getOrderById(id);

        if (order.isPresent()) {

            return ResponseEntity.ok(order.get());

        }

        return ResponseEntity.badRequest()
                .body("Order not found");

    }

    @GetMapping("/email/{email}")
    public ResponseEntity<List<Order>> getByEmail(
            @PathVariable String email) {

        return ResponseEntity.ok(
                orderService.getOrdersByEmail(email));

    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<Order>> getByStatus(
            @PathVariable String status) {

        return ResponseEntity.ok(
                orderService.getOrdersByStatus(status));

    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(
            @PathVariable Long id,
            @RequestBody Order order) {

        return ResponseEntity.ok(
                orderService.updateOrder(id, order));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteOrder(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                orderService.deleteOrder(id));

    }

}