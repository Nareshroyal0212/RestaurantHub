package com.restauranthub.service;

import java.util.List;
import java.util.Optional;

import com.restauranthub.model.Menu;

public interface MenuService {

    List<Menu> getAllMenuItems();

    Optional<Menu> getMenuById(Long id);

    List<Menu> getMenuByCategory(String category);

    List<Menu> searchFood(String foodName);

    Menu addMenu(Menu menu);

    Menu updateMenu(Long id, Menu menu);

    String deleteMenu(Long id);

}