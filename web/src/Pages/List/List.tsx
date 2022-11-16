import { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { Filter } from "../../components/Filter/Filter";
import { HeaderSearch } from "../../components/HeaderSearch/HeaderSearch";
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

export function List() {

    const [cars, setCar] = useState<Carro[]>([]);

    const [search, setSearch] = useState('');

    const filteredRepos = search.length > 0
        ? cars.filter(car => car.name.includes(search.toUpperCase()))
        : [];

    useEffect(() => {
        fetch(`http://localhost:8080/carro`)
            .then((res) => res.json())
            .then((json) => setCar(json))
    }, []);

    return (
        <div>
            <HeaderSearch />

            <div>

                <div className="w-screen flex justify-center">
                    <input type="text" className='bg-icon-search bg-no-repeat bg-[#D9D9D9] w-[439px] h-8 pt-4 pb-4 pl-16 rounded-lg text-lg' value={search} onChange={(ev) => setSearch(ev.target.value)} placeholder='Digite a marca ou modelo do veiculo' />
                </div>

                <div>

                    {
                        search.length > 0 ?
                            (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-4 mt-5 ml-2">
                                {filteredRepos.map(car => {
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
                            </div>)
                            :
                            (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-4 mt-5 ml-2">
                                {cars.map( car => {
                                    const valueCar = car.price;
                                    const priceCar = valueCar.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
                                    return(
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
                                }) }
                            </div>)
                    }

                </div>
            </div>
        </div>
    )

}