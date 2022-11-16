package com.store.car.entities.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor

public enum FuelType {

    ETANOL(0L, "ETANOL"), GASOLINA(1L, "GASOLINA"), DIESEL(2L, "DIESEL"), HIBRIDO(3L, "HIBRIDO"), ELETRICO(4L, "ELETRICO"), FLEX(5L, "FLEX");

    private Long code;

    private String describe;

    public static FuelType toEnum(Long code) throws IllegalAccessException{
        if (code == null){
            return null;
        }
        for (FuelType x: FuelType.values()){
            if (code.equals(x)){
                return x;
            }
        }

        throw new IllegalAccessException("Perfil inválido");
    }

}
