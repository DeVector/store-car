package com.store.car.mapper;

import com.store.car.entities.Carro;
import com.store.car.entities.Marca;
import com.store.car.entities.dto.CarroDTO;
import com.store.car.repositories.MarcarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CarroMapper {

    @Autowired
    public MarcarRepository repository;

    public Carro toEntity(CarroDTO dto){

        Carro car = new Carro();

        car.setId(dto.getId());
        car.setName((dto.getName()).toLowerCase());
        car.setQtDoors(dto.getQtDoors());
        car.setYearCar(dto.getYearCar());
        car.setNumberPassengers(dto.getNumberPassengers());
        car.setTrunkLiters(dto.getTrunkLiters());
        car.setLitersFuel(dto.getLitersFuel());
        car.setEndPlate(dto.getEndPlate());
        car.setColor((dto.getColor()).toLowerCase());
        car.setKm(dto.getKm());
        car.setBodywork((dto.getBodywork()).toLowerCase());
        car.setPrice(dto.getPrice());
        car.setChassis((dto.getChassis()).toLowerCase());
        car.setCarType(dto.getCarType());
        car.setFuelType(dto.getFuelType());
        car.setMarca(findByName(dto.getNameMarca()));
        car.setDescription((dto.getDescription()).toLowerCase());
        car.setBannerUrl((dto.getBannerUrl()).toLowerCase());

        return car;

    }

    public CarroDTO toDto(Carro car){

        CarroDTO dto = new CarroDTO();

        dto.setId(car.getId());
        dto.setName((car.getName()).toUpperCase());
        dto.setQtDoors(car.getQtDoors());
        dto.setYearCar(car.getYearCar());
        dto.setNumberPassengers(car.getNumberPassengers());
        dto.setTrunkLiters(car.getTrunkLiters());
        dto.setLitersFuel(car.getLitersFuel());
        dto.setEndPlate(car.getEndPlate());
        dto.setColor((car.getColor()).toUpperCase());
        dto.setKm(car.getKm());
        dto.setBodywork((car.getBodywork()).toUpperCase());
        dto.setPrice(car.getPrice());
        dto.setChassis((car.getChassis()).toUpperCase());
        dto.setCarType(car.getCarType());
        dto.setFuelType(car.getFuelType());
        dto.setNameMarca((car.getMarca().getName()).toUpperCase());
        dto.setDescription((car.getDescription()).toUpperCase());
        dto.setBannerUrl(car.getBannerUrl());

        return dto;

    }

    public List<CarroDTO> toDtoList(List<Carro> list){
        return list.stream().map(this::toDto).collect(Collectors.toList());
    }

    private Marca findByName(String name){
        return repository.findByName(name);
    }

}
