package com.store.car.entities.enums;

import lombok.Getter;

@Getter

public enum CarType {

    ESPORTIVO(0, "ESPORTIVO"), FAMILIAR(1, "FAMILIAR"), EXECUTIVO(2, "EXECUTIVO"), POPULAR(3, "POPULAR");

    private Integer code;

    private String describe;

    CarType(Integer code, String describe){
        this.code = code;
        this.describe = describe;
    }

    public static CarType toEnum(Integer code) throws IllegalAccessException {
        if (code == null){
            return null;
        }
        for (CarType x: CarType.values()){
            if (code.equals(x.getCode())){
                return x;
            }
        }
        throw new IllegalAccessException("Perfil inválido");
    }

}
