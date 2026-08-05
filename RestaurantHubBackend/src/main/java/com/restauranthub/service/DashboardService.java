package com.restauranthub.service;

import com.restauranthub.dto.DashboardDTO;

public interface DashboardService {

    DashboardDTO getDashboard(String email);

}