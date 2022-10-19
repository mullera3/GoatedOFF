package com.example.goatedoff.model;

import java.sql.Timestamp;

public class Sneakers {
    private Integer id;
    private Integer sneakerId;
    private String sneakerName;
    private String colorWay;
    private String description;
    private Timestamp releaseDate;
    private Double price;
    private Integer styleId;
    private Integer soldById;
    private Integer quatity;

    public Sneakers(Integer id, Integer sneakerId, String sneakerName, String colorWay, String description,
                    Timestamp releaseDate, Double price, Integer styleId, Integer soldById, Integer quatity) {
        this.id = id;
        this.sneakerId = sneakerId;
        this.sneakerName = sneakerName;
        this.colorWay = colorWay;
        this.description = description;
        this.releaseDate = releaseDate;
        this.price = price;
        this.styleId = styleId;
        this.soldById = soldById;
        this.quatity = quatity;
    }
    public Sneakers(){

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

    public String getSneakerName() {
        return sneakerName;
    }

    public void setSneakerName(String sneakerName) {
        this.sneakerName = sneakerName;
    }

    public String getColorWay() {
        return colorWay;
    }

    public void setColorWay(String colorWay) {
        this.colorWay = colorWay;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Timestamp getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Timestamp releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getStyleId() {
        return styleId;
    }

    public void setStyleId(Integer styleId) {
        this.styleId = styleId;
    }

    public Integer getSoldById() {
        return soldById;
    }

    public void setSoldById(Integer soldById) {
        this.soldById = soldById;
    }

    public Integer getQuatity() {
        return quatity;
    }

    public void setQuatity(Integer quatity) {
        this.quatity = quatity;
    }
}
