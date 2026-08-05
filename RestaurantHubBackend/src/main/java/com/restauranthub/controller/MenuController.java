package com.restauranthub.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.restauranthub.model.Menu;
import com.restauranthub.service.MenuService;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin(origins = "http://localhost:5173")
public class MenuController {

    @Autowired
    private MenuService menuService;

    // ==========================
    // Get All Menu Items
    // ==========================
    @GetMapping
    public ResponseEntity<List<Menu>> getAllMenuItems() {

        return ResponseEntity.ok(menuService.getAllMenuItems());

    }

    // ==========================
    // Get Menu By ID
    // ==========================
    @GetMapping("/{id}")
    public ResponseEntity<?> getMenuById(@PathVariable Long id) {

        Optional<Menu> menu = menuService.getMenuById(id);

        if (menu.isPresent()) {
            return ResponseEntity.ok(menu.get());
        }

        return ResponseEntity.badRequest().body("Menu item not found");

    }

    // ==========================
    // Get Menu By Category
    // ==========================
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Menu>> getByCategory(
            @PathVariable String category) {

        return ResponseEntity.ok(menuService.getMenuByCategory(category));

    }

    // ==========================
    // Search Food
    // ==========================
    @GetMapping("/search")
    public ResponseEntity<List<Menu>> searchFood(
            @RequestParam String foodName) {

        return ResponseEntity.ok(menuService.searchFood(foodName));

    }

    // ==========================
    // Add Menu Item
    // ==========================
    @PostMapping
    public ResponseEntity<Menu> addMenu(
            @RequestBody Menu menu) {

        return ResponseEntity.ok(menuService.addMenu(menu));

    }

    // ==========================
    // Update Menu Item
    // ==========================
    @PutMapping("/{id}")
    public ResponseEntity<Menu> updateMenu(
            @PathVariable Long id,
            @RequestBody Menu menu) {

        return ResponseEntity.ok(menuService.updateMenu(id, menu));

    }

    // ==========================
    // Delete Menu Item
    // ==========================
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMenu(
            @PathVariable Long id) {

        return ResponseEntity.ok(menuService.deleteMenu(id));

    }

}