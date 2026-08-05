package com.restauranthub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.restauranthub.dto.ReportDTO;
import com.restauranthub.service.ReportService;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "http://localhost:5173")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @GetMapping
    public ResponseEntity<ReportDTO> getRestaurantReport() {

        return ResponseEntity.ok(
                reportService.getRestaurantReport());

    }

}