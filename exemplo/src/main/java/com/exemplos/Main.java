package com.exemplos;


import java.util.Scanner;

public class Main {

    public static String name;

    public static String movie;

    public static Double password;

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String login;
        double value;

        System.out.println("Entre com o seu nome:");
        name = scanner.next();

        System.out.println(name);

        System.out.println("Entre com a senha:");
        password = Double.parseDouble(scanner.next());

        System.out.println(password);

        System.out.println("Entre com o nome:");
        login = scanner.next();

        System.out.println("Entre com a password:");
        value = Double.parseDouble(scanner.next());

        System.out.println(movie);
    }

}
