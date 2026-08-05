package com.restauranthub.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restauranthub.dto.ReportDTO;
import com.restauranthub.repository.ContactRepository;
import com.restauranthub.repository.MenuRepository;
import com.restauranthub.repository.OrderRepository;
import com.restauranthub.repository.ReservationRepository;
import com.restauranthub.repository.StaffRepository;
import com.restauranthub.repository.UserRepository;
import com.restauranthub.service.ReportService;

@Service
public class ReportServiceImpl implements ReportService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MenuRepository menuRepository;

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private StaffRepository staffRepository;

    @Autowired
    private ContactRepository contactRepository;

    @Override
    public ReportDTO getRestaurantReport() {

        ReportDTO report = new ReportDTO();

        report.setTotalOrders(orderRepository.count());
        report.setTotalCustomers(userRepository.count());
        report.setTotalMenuItems(menuRepository.count());
        report.setTotalReservations(reservationRepository.count());
        report.setTotalStaff(staffRepository.count());
        report.setTotalContacts(contactRepository.count());

        return report;

    }

}