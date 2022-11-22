import { useEffect, useState } from "react";
import { Carro } from "../../types/carro";
import { Card } from "../Card/Card";


type Props = {
    startYear: string;
    endYear: string;
    initP: string;
    endP: string;
    initK: string;
    endK: string;
}

export function DescribYear({ startYear, endYear, initP, endP, initK, endK }: Props) {

    const [cars, setCars] = useState<Carro[]>([]);

    useEffect(() => {
        fetch(`http://localhost:8080/carro/years/price/km?startYear=${startYear}&endYear=${endYear}&startPrice=${initP}&endPrice=${endP}&startKm=${initK}&endKm=${endK}`)
            .then((res) => res.json())
            .then((json) => setCars(json));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-4 mt-5 ml-2">

            {cars.map(car => {
                const valor = car.price;
                const priceCar = valor?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
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
    )
}