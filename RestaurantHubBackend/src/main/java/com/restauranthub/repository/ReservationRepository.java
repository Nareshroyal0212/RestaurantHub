package com.restauranthub.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.restauranthub.model.Reservation;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    List<Reservation> findByEmail(String email);

    List<Reservation> findByStatus(String status);

    List<Reservation> findByReservationDate(LocalDate reservationDate);

    long countByEmail(String email);

}