package com.store.car.services;

import com.store.car.entities.Carro;
import com.store.car.entities.dto.CarroDTO;
import com.store.car.entities.enums.CarType;
import com.store.car.entities.enums.FuelType;
import com.store.car.mapper.CarroMapper;
import com.store.car.repositories.CarroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class CarroService {

    @Autowired
    private CarroRepository repository;

    @Autowired
    private CarroMapper mapper;

    @Transactional(readOnly = true)
    public List<CarroDTO> findAll(){
        return mapper.toDtoList((List<Carro>) repository.findAll());
    }

    @Transactional
    public CarroDTO create(CarroDTO dto){
        Carro carro = mapper.toEntity(dto);
        return mapper.toDto(repository.save(carro));
    }

    @Transactional(readOnly = true)
    public List<CarroDTO> findByNameLike(String name){
        String initials = name.toLowerCase();
        return mapper.toDtoList(repository.findByNameLike(initials));
    }

    @Transactional(readOnly = true)
    public CarroDTO findById(Long id) throws ChangeSetPersister.NotFoundException {
        return repository.findById(id).map(mapper::toDto).orElseThrow(ChangeSetPersister.NotFoundException::new);
    }

    @Transactional
    public List<CarroDTO> findByCarType(CarType carType){
        List<Carro> carros =  repository.findByCarType(carType);
        return mapper.toDtoList(carros);
    }

    @Transactional
    public List<CarroDTO> findByYear(short yearInit, short yearLast){
        List<Carro> carros = repository.findByYearCarBetween(yearInit, yearLast);
        return mapper.toDtoList(carros);
    }

    @Transactional
    public List<CarroDTO> findByPrice(Double startPrice, Double endPrice){
        List<Carro> carros = repository.findByPriceBetween(startPrice, endPrice);
        return mapper.toDtoList(carros);
    }

    @Transactional
    public List<CarroDTO> findByKm(Integer startKm, Integer endKm){
        List<Carro> carros = repository.findByKmBetween(startKm, endKm);
        return mapper.toDtoList(carros);
    }

    @Transactional
    public List<CarroDTO> findByFuelType(FuelType fuelType){
        List<Carro> carros = repository.findByFuelType(fuelType);
        return mapper.toDtoList(carros);
    }

    @Transactional
    public List<CarroDTO> findByAllArgs(
            short startYear, short endYear,
            Double startPrice, Double endPrice,
            Integer startKm, Integer endKm){
        return findByAllArguments(startYear, endYear, startPrice, endPrice, startKm, endKm);
    }

    @Transactional
    public CarroDTO deleteByName(String name){
        Carro carro = repository.findByName(name);
        repository.deleteById(carro.getId());
        return mapper.toDto(carro);
    }

    @Transactional
    public CarroDTO update(CarroDTO dto){
        Carro car = mapper.toEntity(dto);
        repository.save(car);
        return mapper.toDto(car);
    }

    private List<CarroDTO> findByAllArguments(
            short startYear, short endYear,
            Double startPrice, Double endPrice,
            Integer startKm, Integer endKm){
        List<CarroDTO> dtos = new ArrayList<>();

        dtos = findByYear(startYear, endYear);
        dtos = findByPrice(startPrice, endPrice);
        dtos = findByKm(startKm, endKm);

        return dtos;
    }
}
