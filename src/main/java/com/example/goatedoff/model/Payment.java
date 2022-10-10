package com.example.goatedoff.model;

import java.sql.Timestamp;
import java.util.Date;

public class Payment {
    private Integer id;
    private Integer userId;
    private String creditCardNumber;
    private Date expirationDate;
    private String CVV;
    private Timestamp dateCreated;
    private Timestamp dateLastUsed;

    public Payment(Integer id, Integer userId, String creditCardNumber, Date expirationDate, String CVV,
                   Timestamp dateCreated, Timestamp dateLastUsed) {
        this.id = id;
        this.userId = userId;
        this.creditCardNumber = creditCardNumber;
        this.expirationDate = expirationDate;
        this.CVV = CVV;
        this.dateCreated = dateCreated;
        this.dateLastUsed = dateLastUsed;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getCreditCardNumber() {
        return creditCardNumber;
    }

    public void setCreditCardNumber(String creditCardNumber) {
        this.creditCardNumber = creditCardNumber;
    }

    public Date getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Date expirationDate) {
        this.expirationDate = expirationDate;
    }

    public String getCVV() {
        return CVV;
    }

    public void setCVV(String CVV) {
        this.CVV = CVV;
    }

    public Timestamp getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Timestamp dateCreated) {
        this.dateCreated = dateCreated;
    }

    public Timestamp getDateLastUsed() {
        return dateLastUsed;
    }

    public void setDateLastUsed(Timestamp dateLastUsed) {
        this.dateLastUsed = dateLastUsed;
    }
}
