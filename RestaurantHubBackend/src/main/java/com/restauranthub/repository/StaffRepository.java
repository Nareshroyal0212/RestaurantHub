package com.restauranthub.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restauranthub.model.Staff;

public interface StaffRepository extends JpaRepository<Staff, Long> {

    List<Staff> findByDesignation(String designation);

    List<Staff> findByFullNameContainingIgnoreCase(String fullName);

}