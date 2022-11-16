package com.store.car.services;

import com.store.car.entities.Carro;
import com.store.car.entities.Marca;
import com.store.car.entities.enums.CarType;
import com.store.car.entities.enums.FuelType;
import com.store.car.repositories.CarroRepository;
import com.store.car.repositories.MarcarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

@Service
public class DBService {

    @Autowired
    private MarcarRepository marcarRepository;

    @Autowired
    private CarroRepository carroRepository;

    public void instaciaDB(){

        Marca mc1 = new Marca("volkswagen");
        Marca mc2 = new Marca("ferrari");
        Marca mc3 = new Marca("bmw");
        Marca mc4 = new Marca("fiat");
        Marca mc5 = new Marca("toyota");

        Carro c1 = new Carro(mc1,"golf", (short) 5, (short) 2016, (short) 5, (short) 270, (short) 48, (short) 6,
                "Branco", 77300, "Hatch", 160000.0d, "ASD32B4BH1", CarType.ESPORTIVO, FuelType.FLEX, "1.8 turbo com teto panoramico");
        c1.setBannerUrl("https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202210/20221013/volkswagen-golf-2.0-tsi-gti-16v-turbo-gasolina-4p-automatico-wmimagem15511741037.jpg?s=fill&w=1920&h=1440&q=75");
        //c1.setBannerUrl("https://img.remediosdigitales.com/7e8850/volkswagen-golf-gti-clubsport-2021-06/1366_2000.jpg");

        Carro c2 = new Carro(mc1,"gol", (short) 5, (short) 2020, (short) 5, (short) 350, (short) 60, (short) 8,
                "Branco", 52449, "Hatch", 60000.0d, "AS12312SAASD", CarType.POPULAR, FuelType.FLEX, "1.0 aspirado completo");
        c2.setBannerUrl("https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202207/20220722/volkswagen-gol-1.6-msi-totalflex-4p-manual-wmimagem09494650216.jpg?s=fill&w=1920&h=1440&q=75");

        Carro c3 = new Carro(mc5,"etios", (short) 4, (short) 2018, (short) 5, (short) 480, (short) 45, (short) 8,
                "Preto", 0, "Sedã", 68000.0d, "HAD2UI342", CarType.POPULAR, FuelType.FLEX, "1.5xls automatico com banco de couro");
        c3.setBannerUrl("https://www.carrobrasil.com.br/imagem_texto/20140806_145616_toyota-etios-sedam-2015.jpg");

        Carro c4 = new Carro(mc5,"corolla", (short) 5, (short) 2022, (short) 5, (short) 550, (short) 60, (short) 3,
                "Branco", 9375, "Sedã", 185000.0d, "HAASDD2UI342", CarType.EXECUTIVO, FuelType.HIBRIDO, "2.0 turbo com moto eletrico");
        c4.setBannerUrl("https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202210/20221026/toyota-corolla-2.0-vvtie-flex-xei-direct-shift-wmimagem13332391212.jpg?s=fill&w=1920&h=1440&q=75");

        Carro c5 = new Carro(mc5,"sw4", (short) 5, (short) 2022, (short) 7, (short) 701, (short) 80, (short) 12,
                "Branco", 15800, "Caminhonete", 338000.0d, "HAAGTD2UI342", CarType.FAMILIAR, FuelType.DIESEL, "3.4 turbo 4X4");
        c5.setBannerUrl("https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202209/20220927/toyota-hilux-sw4-2.8-srx-4x4-7-lugares-16v-turbo-intercooler-diesel-4p-automatico-wmimagem12081062013.jpg?s=fill&w=1920&h=1440&q=75");

        Carro c6 = new Carro(mc3,"m 530e", (short) 5, (short) 2022, (short) 5, (short) 541, (short) 70, (short) 2,
                "Preto", 23065, "Sedã", 290000.0d, "HAANIVC2UI342", CarType.ESPORTIVO, FuelType.ELETRICO, "2.6 automatico com banco massageador");
        c6.setBannerUrl("https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202204/20220426/bmw-530e-2.0-16v-twinpower-hibrido-m-sport-automatico-wmimagem1108316019.jpg?s=fill&w=1920&h=1440&q=75");

        Carro c7 = new Carro(mc3,"m3 Competition", (short) 5, (short) 2020, (short) 2, (short) 291, (short) 65, (short) 4,
                "Vermelha", 5774, "Copê", 790000.0d, "HAANIVC2UI342", CarType.ESPORTIVO, FuelType.GASOLINA, "2.6 turbo manual competition");
        c7.setBannerUrl("https://image.webmotors.com.br/_fotos/anunciousados/gigante/2022/202210/20221007/bmw-m3-3.0-i6-twinturbo-gasolina-competition-m-steptronic-wmimagem14250879553.jpg?s=fill&w=1920&h=1440&q=75");

        Set<Carro> cs1 = new HashSet<>();
        cs1.add(c2);
        cs1.add(c7);
        Set<Carro> cs2 = new HashSet<>();
        cs2.add(c3);
        cs2.add(c4);
        cs2.add(c5);
        Set<Carro> cs3 = new HashSet<>();
        cs3.add(c1);
        cs3.add(c6);

        marcarRepository.saveAll(Arrays.asList(mc1, mc2, mc3, mc4, mc5));
        carroRepository.saveAll(Arrays.asList(c1, c2, c3, c4, c5, c6, c7));
    }
}
