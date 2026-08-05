package com.restauranthub.dto;

public class DashboardStatsDTO {

    private long totalUsers;
    private long totalMenuItems;
    private long totalReservations;
    private long totalContacts;

    public DashboardStatsDTO() {
    }

    public DashboardStatsDTO(
            long totalUsers,
            long totalMenuItems,
            long totalReservations,
            long totalContacts) {

        this.totalUsers = totalUsers;
        this.totalMenuItems = totalMenuItems;
        this.totalReservations = totalReservations;
        this.totalContacts = totalContacts;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(long totalUsers) {
        this.totalUsers = totalUsers;
    }

    public long getTotalMenuItems() {
        return totalMenuItems;
    }

    public void setTotalMenuItems(long totalMenuItems) {
        this.totalMenuItems = totalMenuItems;
    }

    public long getTotalReservations() {
        return totalReservations;
    }

    public void setTotalReservations(long totalReservations) {
        this.totalReservations = totalReservations;
    }

    public long getTotalContacts() {
        return totalContacts;
    }

    public void setTotalContacts(long totalContacts) {
        this.totalContacts = totalContacts;
    }

}