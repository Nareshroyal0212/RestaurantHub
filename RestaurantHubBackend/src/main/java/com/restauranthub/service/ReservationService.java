package com.restauranthub.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.restauranthub.model.Reservation;

public interface ReservationService {

    // Create Reservation
    Reservation createReservation(Reservation reservation);

    // Get All Reservations
    List<Reservation> getAllReservations();

    // Get Reservation By Id
    Optional<Reservation> getReservationById(Long id);

    // Get Reservation By Email
    List<Reservation> getReservationByEmail(String email);

    // Get Reservation By Status
    List<Reservation> getReservationByStatus(String status);

    // Get Reservation By Date
    List<Reservation> getReservationByDate(LocalDate date);

    // Update Reservation
    Reservation updateReservation(Long id, Reservation reservation);

    // NEW METHOD
    Reservation updateReservationStatus(Long id, String status);

    // Delete Reservation
    String deleteReservation(Long id);

}