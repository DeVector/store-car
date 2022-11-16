package com.store.car.entities.dto;

import com.store.car.entities.enums.CarType;
import com.store.car.entities.enums.FuelType;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data

public class CarroDTO {

    private Long id;

    private String nameMarca;

    private String bannerUrl;

    private String description;

    private String name;

    private Short qtDoors;

    private Short yearCar;

    private Short numberPassengers;

    private Short trunkLiters;

    private Short litersFuel;

    private Short endPlate;

    private String color;

    private Integer km;

    private String bodywork;

    private Double price;

    private String chassis;

    private CarType carType;

    private FuelType fuelType;

    /**public Set<String> getBannerUrl() {
        return bannerUrl;
    }

    public void setBannerUrl(String bannerUrl){
        this.bannerUrl.add(bannerUrl);
    }**/

}
