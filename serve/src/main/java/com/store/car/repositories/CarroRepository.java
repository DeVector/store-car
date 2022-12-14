package com.store.car.repositories;

import com.store.car.entities.Carro;
import com.store.car.entities.enums.CarType;
import com.store.car.entities.enums.FuelType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarroRepository extends CrudRepository<Carro, Long> {

    Carro findByName(String name);

    @Query("SELECT c FROM Carro c WHERE c.name LIKE %:name%")
    List<Carro> findByNameLike(String name);

    List<Carro> findByCarType(CarType carType);

    @Query("SELECT c FROM Carro c WHERE c.yearCar BETWEEN :yearInit AND :yearLast")
    List<Carro> findByYearCarBetween(Integer yearInit, Integer yearLast);

    List<Carro> findByPriceBetween(Double startPrice, Double endPrice);

    List<Carro> findByKmBetween(Integer startKm, Integer endKm);

    List<Carro> findByFuelType(FuelType fuelType);

    @Query("SELECT c FROM Carro c " +
            "WHERE c.yearCar BETWEEN :yearInit AND :yearLast " +
            "AND c.price BETWEEN :startPrice AND :endPrice " +
            "AND c.km BETWEEN :startKm AND :endKm")
    List<Carro> findAllArgs(Integer yearInit, Integer yearLast, Double startPrice, Double endPrice, Integer startKm, Integer endKm);

}
