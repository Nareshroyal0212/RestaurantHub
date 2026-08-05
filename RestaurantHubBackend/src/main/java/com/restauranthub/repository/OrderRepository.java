package com.restauranthub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restauranthub.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByEmail(String email);

    List<Order> findByOrderStatus(String orderStatus);

    long countByEmail(String email);

}