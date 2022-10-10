package com.example.goatedoff.model;

import com.example.goatedoff.util.enums.ShippingType;

import java.sql.Timestamp;

public class Orders {
    private Integer orderId;
    private Integer userId;
    private Integer soldById;
    private Integer sneakerId;
    private Double cost;
    private ShippingType shipping;
    private Timestamp dateOrderCreated;
    private Timestamp dateOrderUpdated;

    public Orders(Integer orderId, Integer userId, Integer soldById, Integer sneakerId, Double cost,
                  ShippingType shipping, Timestamp dateOrderCreated, Timestamp dateOrderUpdated) {
        this.orderId = orderId;
        this.userId = userId;
        this.soldById = soldById;
        this.sneakerId = sneakerId;
        this.cost = cost;
        this.shipping = shipping;
        this.dateOrderCreated = dateOrderCreated;
        this.dateOrderUpdated = dateOrderUpdated;
    }

    public Orders() {
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getSoldById() {
        return soldById;
    }

    public void setSoldById(Integer soldById) {
        this.soldById = soldById;
    }

    public Integer getSneakerId() {
        return sneakerId;
    }

    public void setSneakerId(Integer sneakerId) {
        this.sneakerId = sneakerId;
    }

    public Double getCost() {
        return cost;
    }

    public void setCost(Double cost) {
        this.cost = cost;
    }

    public ShippingType getShipping() {
        return shipping;
    }

    public void setShipping(ShippingType shipping) {
        this.shipping = shipping;
    }

    public Timestamp getDateOrderCreated() {
        return dateOrderCreated;
    }

    public void setDateOrderCreated(Timestamp dateOrderCreated) {
        this.dateOrderCreated = dateOrderCreated;
    }

    public Timestamp getDateOrderUpdated() {
        return dateOrderUpdated;
    }

    public void setDateOrderUpdated(Timestamp dateOrderUpdated) {
        this.dateOrderUpdated = dateOrderUpdated;
    }
}
