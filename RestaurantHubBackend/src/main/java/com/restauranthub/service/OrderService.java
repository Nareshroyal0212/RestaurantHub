package com.restauranthub.service;

import java.util.List;
import java.util.Optional;

import com.restauranthub.model.Order;

public interface OrderService {

    Order placeOrder(Order order);

    List<Order> getAllOrders();

    Optional<Order> getOrderById(Long id);

    List<Order> getOrdersByEmail(String email);

    List<Order> getOrdersByStatus(String status);

    Order updateOrder(Long id, Order order);

    String deleteOrder(Long id);

}