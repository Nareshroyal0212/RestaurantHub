package com.restauranthub.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.restauranthub.model.Staff;
import com.restauranthub.service.StaffService;

@RestController
@RequestMapping("/api/staff")
@CrossOrigin(origins = "http://localhost:5173")
public class StaffController {

    @Autowired
    private StaffService staffService;

    @PostMapping
    public ResponseEntity<Staff> addStaff(
            @RequestBody Staff staff) {

        return ResponseEntity.ok(
                staffService.addStaff(staff));

    }

    @GetMapping
    public ResponseEntity<List<Staff>> getAllStaff() {

        return ResponseEntity.ok(
                staffService.getAllStaff());

    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getStaffById(
            @PathVariable Long id) {

        Optional<Staff> staff =
                staffService.getStaffById(id);

        if (staff.isPresent()) {

            return ResponseEntity.ok(staff.get());

        }

        return ResponseEntity.badRequest()
                .body("Staff Not Found");

    }

    @PutMapping("/{id}")
    public ResponseEntity<Staff> updateStaff(
            @PathVariable Long id,
            @RequestBody Staff staff) {

        return ResponseEntity.ok(
                staffService.updateStaff(id, staff));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteStaff(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                staffService.deleteStaff(id));

    }

}