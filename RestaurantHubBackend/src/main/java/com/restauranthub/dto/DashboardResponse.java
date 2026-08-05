package com.restauranthub.dto;

public class DashboardResponse {

    private long totalFoods;
    private long totalReservations;
    private long totalMessages;

    public DashboardResponse() {
    }

    public long getTotalFoods() {
        return totalFoods;
    }

    public void setTotalFoods(long totalFoods) {
        this.totalFoods = totalFoods;
    }

    public long getTotalReservations() {
        return totalReservations;
    }

    public void setTotalReservations(long totalReservations) {
        this.totalReservations = totalReservations;
    }

    public long getTotalMessages() {
        return totalMessages;
    }

    public void setTotalMessages(long totalMessages) {
        this.totalMessages = totalMessages;
    }

}