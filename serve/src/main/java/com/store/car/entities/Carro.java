package com.store.car.entities;

import com.store.car.entities.enums.CarType;
import com.store.car.entities.enums.FuelType;
import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data

@Entity
public class Carro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "marca_id")
    private Marca marca;

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

    public Carro(Marca marca, String name, Short qtDoors,
                 Short yearCar, Short numberPassengers,
                 Short trunkLiters, Short litersFuel,
                 Short endPlate, String color, Integer km,
                 String bodywork, Double price, String chassis,
                 CarType carType, FuelType fuelType, String description) {
        this.marca = marca;
        this.name = name;
        this.qtDoors = qtDoors;
        this.yearCar = yearCar;
        this.numberPassengers = numberPassengers;
        this.trunkLiters = trunkLiters;
        this.litersFuel = litersFuel;
        this.endPlate = endPlate;
        this.color = color;
        this.km = km;
        this.bodywork = bodywork;
        this.price = price;
        this.chassis = chassis;
        this.carType = carType;
        this.fuelType = fuelType;
        this.description = description;
    }

    public Carro() {
    }

    /**public Set<String> getBannerUrl() {
        return bannerUrl;
    }

    public void setBannerUrl(String bannerUrl){
        this.bannerUrl.add(bannerUrl);
    }**/
}
