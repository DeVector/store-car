package com.exemplos;


import java.util.Scanner;

public class Main {

    public static String name;

    public static String movie;

    public static Integer password;

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        String login;
        Integer pass;

        System.out.println("Entre com o seu nome:");
        name = scanner.next();

        System.out.println(name);

        System.out.println("Entre com a senha:");
        password = Integer.parseInt(scanner.next());

        System.out.println(password);

        System.out.println("Entre com o nome:");
        login = scanner.next();

        System.out.println("Entre com a password:");
        pass = Integer.parseInt(scanner.next());

        movie = login.equals(name) && pass.equals(password) ? movie = scanner.next() : "";

        System.out.println(movie);
    }

}
