package com.restauranthub.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restauranthub.model.Order;
import com.restauranthub.repository.OrderRepository;
import com.restauranthub.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public Order placeOrder(Order order) {

        order.setTotalAmount(
                order.getPrice() * order.getQuantity());

        order.setOrderStatus("Pending");

        return orderRepository.save(order);

    }

    @Override
    public List<Order> getAllOrders() {

        return orderRepository.findAll();

    }

    @Override
    public Optional<Order> getOrderById(Long id) {

        return orderRepository.findById(id);

    }

    @Override
    public List<Order> getOrdersByEmail(String email) {

        return orderRepository.findByEmail(email);

    }

    @Override
    public List<Order> getOrdersByStatus(String status) {

        return orderRepository.findByOrderStatus(status);

    }

    @Override
    public Order updateOrder(Long id, Order order) {

        Order existing =
                orderRepository.findById(id).orElseThrow();

        existing.setCustomerName(order.getCustomerName());
        existing.setEmail(order.getEmail());
        existing.setPhone(order.getPhone());
        existing.setFoodName(order.getFoodName());
        existing.setQuantity(order.getQuantity());
        existing.setPrice(order.getPrice());

        existing.setTotalAmount(
                order.getPrice() * order.getQuantity());

        existing.setOrderStatus(order.getOrderStatus());

        return orderRepository.save(existing);

    }

    @Override
    public String deleteOrder(Long id) {

        orderRepository.deleteById(id);

        return "Order Deleted Successfully";

    }

}