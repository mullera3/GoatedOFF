package com.example.goatedoff.model;

public class Countries {
    private Integer countryCode;
    private String countryName;
    private String continentName;

    public Countries(Integer countryCode, String countryName, String continentName) {
        this.countryCode = countryCode;
        this.countryName = countryName;
        this.continentName = continentName;
    }

    public Countries()
    {

    }

    public Integer getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(Integer countryCode) {
        this.countryCode = countryCode;
    }

    public String getCountryName() {
        return countryName;
    }

    public void setCountryName(String countryName) {
        this.countryName = countryName;
    }

    public String getContinentName() {
        return continentName;
    }

    public void setContinentName(String continentName) {
        this.continentName = continentName;
    }
}
