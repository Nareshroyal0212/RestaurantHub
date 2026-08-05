package com.restauranthub.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.restauranthub.dto.DashboardResponse;
import com.restauranthub.model.Contact;
import com.restauranthub.model.Menu;
import com.restauranthub.model.Reservation;
import com.restauranthub.repository.ContactRepository;
import com.restauranthub.repository.MenuRepository;
import com.restauranthub.repository.ReservationRepository;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private MenuRepository menuRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private ContactRepository contactRepository;

    // ==========================
    // Dashboard Statistics
    // ==========================

    @GetMapping("/dashboard")
    public ResponseEntity<DashboardResponse> dashboard() {

        DashboardResponse response = new DashboardResponse();

        response.setTotalFoods(menuRepository.count());
        response.setTotalReservations(reservationRepository.count());
        response.setTotalMessages(contactRepository.count());

        return ResponseEntity.ok(response);
    }

    // ==========================
    // All Reservations
    // ==========================

    @GetMapping("/reservations")
    public ResponseEntity<List<Reservation>> reservations() {

        return ResponseEntity.ok(reservationRepository.findAll());

    }

    // ==========================
    // All Contact Messages
    // ==========================

    @GetMapping("/messages")
    public ResponseEntity<List<Contact>> messages() {

        return ResponseEntity.ok(contactRepository.findAll());

    }

}