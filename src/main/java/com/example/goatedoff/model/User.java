package com.example.goatedoff.model;

import java.sql.Timestamp;
import java.util.Date;

public class User {
    private int id;
    private String firstName;
    private String lastName;
    private Date dob;
    private String email;
    private String password;
    private Timestamp dateUserCreated;
    private Timestamp dateUserUpdated;
    private String countryCode;
    private Integer postalCode;
    private String state;
    private String city;

    public User() {
    }

    public User(int id, String firstName, String lastName, Date dob, String email, String password,
                Timestamp dateUserCreated, Timestamp dateUserUpdated, String countryCode, Integer postalCode,
                String state, String city) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.email = email;
        this.password = password;
        this.dateUserCreated = dateUserCreated;
        this.dateUserUpdated = dateUserUpdated;
        this.countryCode = countryCode;
        this.postalCode = postalCode;
        this.state = state;
        this.city = city;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Timestamp getDateUserCreated() {
        return dateUserCreated;
    }

    public void setDateUserCreated(Timestamp dateUserCreated) {
        this.dateUserCreated = dateUserCreated;
    }

    public Timestamp getDateUserUpdated() {
        return dateUserUpdated;
    }

    public void setDateUserUpdated(Timestamp dateUserUpdated) {
        this.dateUserUpdated = dateUserUpdated;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public Integer getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(Integer postalCode) {
        this.postalCode = postalCode;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
