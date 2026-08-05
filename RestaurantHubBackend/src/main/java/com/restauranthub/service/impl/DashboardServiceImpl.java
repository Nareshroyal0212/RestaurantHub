package com.restauranthub.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restauranthub.dto.DashboardDTO;
import com.restauranthub.repository.ContactRepository;
import com.restauranthub.repository.MenuRepository;
import com.restauranthub.repository.OrderRepository;
import com.restauranthub.repository.ReservationRepository;
import com.restauranthub.service.DashboardService;

@Service
public class DashboardServiceImpl implements DashboardService {

    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private MenuRepository menuRepository;

    @Autowired
    private OrderRepository orderRepository;

    @Override
    public DashboardDTO getDashboard(String email) {

        DashboardDTO dashboard = new DashboardDTO();

        dashboard.setMyOrders(
                orderRepository.countByEmail(email));

        dashboard.setMyReservations(
                reservationRepository.countByEmail(email));

        dashboard.setMyMessages(
                contactRepository.countByEmail(email));

        dashboard.setTotalMenuItems(
                menuRepository.count());

        return dashboard;

    }

}