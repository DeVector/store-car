package com.store.car.controllers;

import com.store.car.entities.Carro;
import com.store.car.entities.dto.CarroDTO;
import com.store.car.entities.enums.CarType;
import com.store.car.entities.enums.FuelType;
import com.store.car.services.CarroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/carro")

public class CarroController {

    @Autowired
    private CarroService service;

    @GetMapping
    public ResponseEntity<List<CarroDTO>> findAll(){
        return ResponseEntity.ok(service.findAll());
    }

    @PostMapping
    public ResponseEntity<CarroDTO> create(@RequestBody CarroDTO dto){
        return ResponseEntity.ok(service.create(dto));
    }

    @GetMapping(value = "/{name}")
    public ResponseEntity<List<CarroDTO>> findByName(@PathVariable String name){
        return ResponseEntity.ok(service.findByNameLike(name));
    }

    @GetMapping(value = "/{nameMarca}/{name}/{id}")
    public ResponseEntity<CarroDTO> findById(@PathVariable Long id) throws ChangeSetPersister.NotFoundException {
        return ResponseEntity.ok(service.findById(id));
    }

    @GetMapping(value = "/categoria/{carType}")
    public ResponseEntity<List<CarroDTO>> findByCarType(@PathVariable CarType carType){
        return ResponseEntity.ok(service.findByCarType(carType));
    }

    @GetMapping(value = "/years/{yearInit}&{yaerLast}")
    public ResponseEntity<List<CarroDTO>> findByYearInitANDYearLast(@PathVariable short yearInit, short yearLast){
        return ResponseEntity.ok(service.findByYear(yearInit, yearLast));
    }

    @GetMapping(value = "/prices/{startPrice}&{endPrice}")
    public ResponseEntity<List<CarroDTO>> findByPriceBetween(@PathVariable Double startPrice, Double endPrice){
        return ResponseEntity.ok(service.findByPrice(startPrice, endPrice));
    }

    @GetMapping(value = "/km/{startKm}&{endKm}")
    public ResponseEntity<List<CarroDTO>> findByKmBetween(@PathVariable Integer startKm, Integer endKm){
        return ResponseEntity.ok(service.findByKm(startKm, endKm));
    }

    @GetMapping(value = "/fuelType/{fuelType}")
    public ResponseEntity<List<CarroDTO>> findByFuelType(@PathVariable FuelType fuelType){
        return ResponseEntity.ok(service.findByFuelType(fuelType));
    }

    @GetMapping(value = "/{startYear}&{endYear}/{startPrice}&{endPrice}/{startKm}&{endKm}")
    public ResponseEntity<List<CarroDTO>> findByAllArgs(@PathVariable short startYear, short endYear,
                                                        Double startPrice, Double endPrice,
                                                        Integer startKm, Integer endKm){
        return ResponseEntity.ok(service.findByAllArgs(startYear, endYear, startPrice, endPrice, startKm, endKm));
    }

    /*@DeleteMapping(value = "/{name}")
    public ResponseEntity<CarroDTO> deleteByName(@PathVariable String name){
        return ResponseEntity.ok(service.deleteByName(name));
    }*/

    @PutMapping
    public ResponseEntity<CarroDTO> update(@RequestBody CarroDTO dto){
        return ResponseEntity.ok(service.update(dto));
    }

}
