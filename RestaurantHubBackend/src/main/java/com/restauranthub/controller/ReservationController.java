package com.restauranthub.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.restauranthub.model.Reservation;
import com.restauranthub.service.ReservationService;

@RestController
@RequestMapping("/api/reservations")
@CrossOrigin(origins = "http://localhost:5173")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    // Create Reservation
    @PostMapping
    public ResponseEntity<Reservation> createReservation(
            @RequestBody Reservation reservation) {

        return ResponseEntity.ok(
                reservationService.createReservation(reservation));
    }

    // Get All Reservations
    @GetMapping
    public ResponseEntity<List<Reservation>> getAllReservations() {

        return ResponseEntity.ok(
                reservationService.getAllReservations());
    }

    // Get Reservation By Id
    @GetMapping("/{id}")
    public ResponseEntity<?> getReservationById(
            @PathVariable Long id) {

        Optional<Reservation> reservation =
                reservationService.getReservationById(id);

        if (reservation.isPresent()) {
            return ResponseEntity.ok(reservation.get());
        }

        return ResponseEntity.badRequest()
                .body("Reservation not found");
    }

    // Get Reservation By Email
    @GetMapping("/email/{email}")
    public ResponseEntity<List<Reservation>> getByEmail(
            @PathVariable String email) {

        return ResponseEntity.ok(
                reservationService.getReservationByEmail(email));
    }

    // Get Reservation By Status
    @GetMapping("/status/{status}")
    public ResponseEntity<List<Reservation>> getByStatus(
            @PathVariable String status) {

        return ResponseEntity.ok(
                reservationService.getReservationByStatus(status));
    }

    // Get Reservation By Date
    @GetMapping("/date/{date}")
    public ResponseEntity<List<Reservation>> getByDate(
            @PathVariable LocalDate date) {

        return ResponseEntity.ok(
                reservationService.getReservationByDate(date));
    }

    // Update Reservation
    @PutMapping("/{id}")
    public ResponseEntity<Reservation> updateReservation(
            @PathVariable Long id,
            @RequestBody Reservation reservation) {

        return ResponseEntity.ok(
                reservationService.updateReservation(id, reservation));
    }

    // Update Reservation Status
    @PutMapping("/{id}/status")
    public ResponseEntity<Reservation> updateReservationStatus(
            @PathVariable Long id,
            @RequestBody Reservation reservation) {

        return ResponseEntity.ok(
                reservationService.updateReservationStatus(
                        id,
                        reservation.getStatus()));
    }

    // Delete Reservation
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteReservation(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                reservationService.deleteReservation(id));
    }
}