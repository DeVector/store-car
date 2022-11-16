import axios from "axios";
import { useEffect, useState } from "react";
import { Carro } from "../../types/carro";
import { BannerDescrib } from "../BannerDescrib/BannerDescrib";
import { InfoCarro } from "../InfoCarro/InfoCarro";
import { InfoPrice } from "../InfoPrice/InfoPrice";

type Props = {
    id: string;
    nameCar: string;
    nameMarca: string;
}

export function DescribCard( { id, nameCar, nameMarca }: Props ){

    const [ car, setCar ] = useState<Carro>();

    useEffect(() => {
        handleGetUserData(id, nameCar, nameMarca);
    }, []);

    async function handleGetUserData(name: any, nameCar: any, nameMarca: any) {
        const response = await fetch(`http://localhost:8080/carro/${nameMarca}/${nameCar}/${name}`);
        const data = await response.json();
        setCar(data);
    }

    const valor = car?.price;
    
    const moeda = valor?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

    return(
        <div>
            <BannerDescrib 
                bannerUrl={car?.bannerUrl}
            />
            <div className= "flex justify-evenly mr-6 ml-6">
                <InfoCarro 
                    nameMarca={car?.nameMarca}
                    name={car?.name}
                    description={car?.description}
                    yearCar={car?.yearCar}
                    km={car?.km}
                    bodywork={car?.bodywork}
                    fuelType={car?.fuelType}
                    endPlate={car?.endPlate}
                    color={car?.color}
                />
                <InfoPrice 
                    price={moeda!}
                />
            </div>
        </div>
    )

}