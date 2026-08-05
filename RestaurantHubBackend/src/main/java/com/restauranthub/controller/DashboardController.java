package com.restauranthub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.restauranthub.dto.DashboardDTO;
import com.restauranthub.service.DashboardService;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "http://localhost:5173")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/{email}")
    public ResponseEntity<DashboardDTO> getDashboard(
            @PathVariable String email) {

        return ResponseEntity.ok(
                dashboardService.getDashboard(email));

    }

}