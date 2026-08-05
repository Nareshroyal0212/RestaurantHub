package com.restauranthub.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restauranthub.model.Menu;
import com.restauranthub.repository.MenuRepository;
import com.restauranthub.service.MenuService;

@Service
public class MenuServiceImpl implements MenuService {

    @Autowired
    private MenuRepository menuRepository;

    @Override
    public List<Menu> getAllMenuItems() {

        return menuRepository.findAll();

    }

    @Override
    public Optional<Menu> getMenuById(Long id) {

        return menuRepository.findById(id);

    }

    @Override
    public List<Menu> getMenuByCategory(String category) {

        return menuRepository.findByCategory(category);

    }

    @Override
    public List<Menu> searchFood(String foodName) {

        return menuRepository.findByFoodNameContainingIgnoreCase(foodName);

    }

    @Override
    public Menu addMenu(Menu menu) {

        return menuRepository.save(menu);

    }

    @Override
    public Menu updateMenu(Long id, Menu menu) {

        Menu existing = menuRepository.findById(id).orElseThrow();

        existing.setFoodName(menu.getFoodName());
        existing.setCategory(menu.getCategory());
        existing.setPrice(menu.getPrice());
        existing.setDescription(menu.getDescription());
        existing.setImageUrl(menu.getImageUrl());
        existing.setAvailable(menu.isAvailable());

        return menuRepository.save(existing);

    }

    @Override
    public String deleteMenu(Long id) {

        menuRepository.deleteById(id);

        return "Menu Deleted Successfully";

    }

}