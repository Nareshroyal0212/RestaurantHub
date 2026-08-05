package com.restauranthub.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restauranthub.model.Staff;
import com.restauranthub.repository.StaffRepository;
import com.restauranthub.service.StaffService;

@Service
public class StaffServiceImpl implements StaffService {

    @Autowired
    private StaffRepository staffRepository;

    @Override
    public Staff addStaff(Staff staff) {

        return staffRepository.save(staff);

    }

    @Override
    public List<Staff> getAllStaff() {

        return staffRepository.findAll();

    }

    @Override
    public Optional<Staff> getStaffById(Long id) {

        return staffRepository.findById(id);

    }

    @Override
    public Staff updateStaff(Long id, Staff staff) {

        Staff existing = staffRepository.findById(id).orElseThrow();

        existing.setFullName(staff.getFullName());
        existing.setEmail(staff.getEmail());
        existing.setPhone(staff.getPhone());
        existing.setDesignation(staff.getDesignation());
        existing.setSalary(staff.getSalary());
        existing.setShift(staff.getShift());

        return staffRepository.save(existing);

    }

    @Override
    public String deleteStaff(Long id) {

        staffRepository.deleteById(id);

        return "Staff Deleted Successfully";

    }

}