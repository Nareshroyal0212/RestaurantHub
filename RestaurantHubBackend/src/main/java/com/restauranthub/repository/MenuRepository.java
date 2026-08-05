package com.restauranthub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restauranthub.model.Menu;

public interface MenuRepository extends JpaRepository<Menu, Long> {

    List<Menu> findByCategory(String category);

    List<Menu> findByFoodNameContainingIgnoreCase(String foodName);

}