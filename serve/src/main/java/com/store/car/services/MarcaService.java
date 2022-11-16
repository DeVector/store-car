package com.store.car.services;

import com.store.car.entities.Marca;
import com.store.car.entities.dto.MarcaDTO;
import com.store.car.mapper.MarcaMapper;
import com.store.car.repositories.MarcarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarcaService {

    @Autowired
    private MarcarRepository repository;

    @Autowired
    private MarcaMapper mapper;

    public List<MarcaDTO> findAll(){
        return mapper.toListDto((List<Marca>) repository.findAll());
    }

    public MarcaDTO create(MarcaDTO dto){
        Marca marca = mapper.toEntity(dto);
        return mapper.toDto(repository.save(marca));
    }

    public MarcaDTO findByName(String name){
        return mapper.toDto(repository.findByName(name));
    }

    public MarcaDTO deleteByName(String name){
        MarcaDTO dto = findByName(name);
        Marca marca = mapper.toEntity(dto);
        repository.deleteById(marca.getId());
        return dto;
    }

    public MarcaDTO updateByName(MarcaDTO dto){
        Marca marca = mapper.toEntity(dto);
        return mapper.toDto(repository.save(marca));
    }
}
