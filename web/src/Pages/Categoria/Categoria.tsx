import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card } from "../../components/Card/Card";
import { Filter } from "../../components/Filter/Filter";
import { Header } from "../../components/Header/Header";
import { Carro } from "../../types/carro";

interface ListCarro {

    id: number;
    nomeMarca: string;
    name: string;
    price: string;
    yearCar: number;
    km: number;
    bannerUrl: string;

}

export function Categoria() {

    const { carType } = useParams();

    const [cars, setCars] = useState<Carro[]>([]);

    useEffect(() => {
        handleGetCars(carType);
    })

    async function handleGetCars(carType: any) {
        const response = await fetch(`http://localhost:8080/carro/categoria/${carType}`);
        const data = await response.json();
        setCars(data);
    }



    return (
        <div>
            <Header />

            <div className="grid grid-cols-4 mt-5 ml-2">

                {cars.map(car => {
                    const valueCar = car.price;
                    const priceCar = valueCar.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                    return (
                        <Card
                            key={car.id}
                            id={car.id}
                            bannerUrl={car.bannerUrl}
                            nomeMarca={car.nameMarca}
                            name={car.name}
                            price={priceCar}
                            yearCar={car.yearCar}
                            km={car.km}
                        />
                    )
                })}

            </div>
            
        </div>
    )
}