package com.restauranthub.dto;

public class DashboardDTO {

    private long myOrders;

    private long myReservations;

    private long myMessages;

    private long totalMenuItems;

    public DashboardDTO() {
    }

    public long getMyOrders() {
        return myOrders;
    }

    public void setMyOrders(long myOrders) {
        this.myOrders = myOrders;
    }

    public long getMyReservations() {
        return myReservations;
    }

    public void setMyReservations(long myReservations) {
        this.myReservations = myReservations;
    }

    public long getMyMessages() {
        return myMessages;
    }

    public void setMyMessages(long myMessages) {
        this.myMessages = myMessages;
    }

    public long getTotalMenuItems() {
        return totalMenuItems;
    }

    public void setTotalMenuItems(long totalMenuItems) {
        this.totalMenuItems = totalMenuItems;
    }

}