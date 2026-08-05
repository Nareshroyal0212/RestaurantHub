package com.restauranthub.service;

import java.util.List;
import java.util.Optional;

import com.restauranthub.model.Staff;

public interface StaffService {

    Staff addStaff(Staff staff);

    List<Staff> getAllStaff();

    Optional<Staff> getStaffById(Long id);

    Staff updateStaff(Long id, Staff staff);

    String deleteStaff(Long id);

}