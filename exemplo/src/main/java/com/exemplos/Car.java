package com.exemplos;

public class Car {

    private String name;

    private String cor;

    public Car(String name, String cor) {
        this.name = name;
        this.cor = cor;
    }

    public Car() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }
}
