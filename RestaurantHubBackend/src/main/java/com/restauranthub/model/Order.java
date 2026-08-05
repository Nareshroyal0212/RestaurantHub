package com.restauranthub.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;

    private String email;

    private String phone;

    private String foodName;

    private Integer quantity;

    private Double price;

    private Double totalAmount;

    private String orderStatus;

    private LocalDateTime orderDate;

    public Order() {
    }

    @PrePersist
    public void prePersist() {

        orderDate = LocalDateTime.now();

        if (orderStatus == null) {

            orderStatus = "Pending";

        }

        if (price != null && quantity != null) {

            totalAmount = price * quantity;

        }

    }

    public Long getId() {

        return id;

    }

    public void setId(Long id) {

        this.id = id;

    }

    public String getCustomerName() {

        return customerName;

    }

    public void setCustomerName(String customerName) {

        this.customerName = customerName;

    }

    public String getEmail() {

        return email;

    }

    public void setEmail(String email) {

        this.email = email;

    }

    public String getPhone() {

        return phone;

    }

    public void setPhone(String phone) {

        this.phone = phone;

    }

    public String getFoodName() {

        return foodName;

    }

    public void setFoodName(String foodName) {

        this.foodName = foodName;

    }

    public Integer getQuantity() {

        return quantity;

    }

    public void setQuantity(Integer quantity) {

        this.quantity = quantity;

    }

    public Double getPrice() {

        return price;

    }

    public void setPrice(Double price) {

        this.price = price;

    }

    public Double getTotalAmount() {

        return totalAmount;

    }

    public void setTotalAmount(Double totalAmount) {

        this.totalAmount = totalAmount;

    }

    public String getOrderStatus() {

        return orderStatus;

    }

    public void setOrderStatus(String orderStatus) {

        this.orderStatus = orderStatus;

    }

    public LocalDateTime getOrderDate() {

        return orderDate;

    }

    public void setOrderDate(LocalDateTime orderDate) {

        this.orderDate = orderDate;

    }

}