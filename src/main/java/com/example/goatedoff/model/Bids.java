package com.example.goatedoff.model;

import com.example.goatedoff.util.enums.BidDecision;

import java.sql.Timestamp;

public class Bids {
    private Integer id;
    private Integer sneakerId;
    private Integer userId;
    private Double bidAmount;
    private BidDecision bidDecision;
    private Timestamp dateCreated;
    private Timestamp dateUpdated;

    public Bids(Integer id, Integer sneakerId, Integer userId, Double bidAmount, BidDecision bidDecision,
                Timestamp dateCreated, Timestamp dateUpdated) {
        this.id = id;
        this.sneakerId = sneakerId;
        this.userId = userId;
        this.bidAmount = bidAmount;
        this.bidDecision = bidDecision;
        this.dateCreated = dateCreated;
        this.dateUpdated = dateUpdated;
    }

    public Bids(){

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getSneakerId() {
        return sneakerId;
    }

    public void setSneakerId(Integer sneakerId) {
        this.sneakerId = sneakerId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Double getBidAmount() {
        return bidAmount;
    }

    public void setBidAmount(Double bidAmount) {
        this.bidAmount = bidAmount;
    }

    public BidDecision getBidDecision() {
        return bidDecision;
    }

    public void setBidDecision(BidDecision bidDecision) {
        this.bidDecision = bidDecision;
    }

    public Timestamp getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Timestamp dateCreated) {
        this.dateCreated = dateCreated;
    }

    public Timestamp getDateUpdated() {
        return dateUpdated;
    }

    public void setDateUpdated(Timestamp dateUpdated) {
        this.dateUpdated = dateUpdated;
    }
}
