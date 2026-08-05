package com.restauranthub.service.impl;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restauranthub.model.Reservation;
import com.restauranthub.repository.ReservationRepository;
import com.restauranthub.service.ReservationService;

@Service
public class ReservationServiceImpl implements ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Override
    public Reservation createReservation(Reservation reservation) {

        if (reservation.getStatus() == null ||
                reservation.getStatus().isBlank()) {

            reservation.setStatus("Pending");

        }

        return reservationRepository.save(reservation);
    }

    @Override
    public List<Reservation> getAllReservations() {

        return reservationRepository.findAll();

    }

    @Override
    public Optional<Reservation> getReservationById(Long id) {

        return reservationRepository.findById(id);

    }

    @Override
    public List<Reservation> getReservationByEmail(String email) {

        return reservationRepository.findByEmail(email);

    }

    @Override
    public List<Reservation> getReservationByStatus(String status) {

        return reservationRepository.findByStatus(status);

    }

    @Override
    public List<Reservation> getReservationByDate(LocalDate reservationDate) {

        return reservationRepository.findByReservationDate(reservationDate);

    }

    @Override
    public Reservation updateReservation(Long id, Reservation reservation) {

        Reservation existing = reservationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reservation not found"));

        existing.setCustomerName(reservation.getCustomerName());
        existing.setEmail(reservation.getEmail());
        existing.setPhone(reservation.getPhone());
        existing.setGuests(reservation.getGuests());
        existing.setReservationDate(reservation.getReservationDate());
        existing.setReservationTime(reservation.getReservationTime());
        existing.setSpecialRequest(reservation.getSpecialRequest());
        existing.setStatus(reservation.getStatus());

        return reservationRepository.save(existing);
    }

    @Override
    public Reservation updateReservationStatus(Long id, String status) {

        Reservation reservation = reservationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reservation not found"));

        reservation.setStatus(status);

        return reservationRepository.save(reservation);

    }

    @Override
    public String deleteReservation(Long id) {

        reservationRepository.deleteById(id);

        return "Reservation Deleted Successfully";
    }

}