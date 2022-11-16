package com.store.car.mapper;

import com.store.car.entities.Marca;
import com.store.car.entities.dto.MarcaDTO;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class MarcaMapper {

    public Marca toEntity(MarcaDTO dto){

        Marca marca = new Marca();
        marca.setId(dto.getId());
        marca.setName(dto.getName());

        return marca;
    }

    public MarcaDTO toDto(Marca marca){

        MarcaDTO dto = new MarcaDTO();
        dto.setId(marca.getId());
        dto.setName(marca.getName());

        return dto;
    }

    public List<MarcaDTO> toListDto(List<Marca> list){

        return list.stream().map(this::toDto).collect(Collectors.toList());

    }

}
