import axios from "axios";
import { FormEvent, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { Brand } from "../../types/Brand";
import { Input } from "../Form/Input";


export function FormSaveCar() {

    const [brands, setBrand] = useState<Brand[]>([]);

    useEffect(() => {
        axios('http://localhost:8080/marca').then(response => {
            setBrand(response.data);
        })
    }, [])

    async function handleSaveCar(event: FormEvent) {

        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const data = Object.fromEntries(formData);

        if (!data.name) {
            return;
        }

        console.log(data);

        try {
            await axios.post(`http://localhost:8080/carro`, {
                id: null,
                nameMarca: data.nameMarca,
                name: data.name,
                bannerUrl: data.bannerUrl,
                description: data.description,
                qtDoors: data.qtDoors,
                yearCar: data.yearCar,
                numberPassengers: data.numberPassengers,
                trunkLiters: data.trunkLiters,
                litersFuel: data.litersFuel,
                endPlate: data.endPlate,
                color: data.color,
                km: data.km,
                bodywork: data.bodywork,
                price: data.price,
                chassis: data.chassis,
                carType: data.carType,
                fuelType: data.fuelType
            })

            alert('Carro criado com sucesso!!!')
        } catch (error) {
            console.log(error)
            alert('Erro ao savar carro ;-(')
        }

    }

    return (
        <div>
            <div>
                <form className="pt-5 m-2 gap-2 bg-slate-200 w-auto h-auto" onSubmit={handleSaveCar}>

                    <div className="grid grid-cols-2">

                        <div className="pl-2 flex flex-col gap-1">

                            <label htmlFor="nameMarca">Qual marca do carro?</label>

                            <select
                                name="nameMarca"
                                id="nameMarca"
                                defaultValue=""
                                className="w-40 h-8 rounded-md"
                            >
                                <option disabled value="">Selecione a marca</option>

                                {brands.map(brand => {
                                    return (
                                        <option
                                            key={brand.id}
                                            value={brand.name}
                                        >
                                            {brand.name}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="name">Qual nome do carro?</label>
                            <Input className="w-40 h-8 rounded-md pl-2" name="name" id="name" placeholder="Ex.: Nome do carro" autoComplete="off" />
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="bannerUrl">Digite o local da imagem</label>
                            <Input className="w-40 h-8 rounded-md pl-2" name="bannerUrl" id="bannerUrl" placeholder="Ex.: http://iamgens.io/ads" autoComplete="off" />
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="description">Qual descrição do carro?</label>
                            <Input className="w-40 h-8 rounded-md pl-2" name="description" id="description" placeholder="Ex.: 1.6 ASPIRADO" autoComplete="off" />
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="qtDoors">Quantas portas tem o veiculo?</label>
                            <Input className="w-40 h-8 rounded-md pl-2 appearance-none" name="qtDoors" id="qtDoors" type="number" placeholder="Ex.: 5" autoComplete="off" />
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="yearCar">Qual ano do carro?</label>
                            <Input className="w-40 h-8 rounded-md pl-2 appearance-none" name="yearCar" id="yearCar" type="number" placeholder="Ex.: 2021" autoComplete="off" />
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="numberPassengers">Quantidade de passageiros</label>
                            <Input className="w-40 h-8 rounded-md pl-2 appearance-none" name="numberPassengers" id="numberPassengers" type="number" placeholder="Ex.: 3" autoComplete="off" />
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="trunkLiters">Quantos litros tem o porta mala?</label>
                            <Input className="w-40 h-8 rounded-md pl-2 appearance-none" name="trunkLiters" id="trunkLiters" type="number" placeholder="Ex.: 576" autoComplete="off" />
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="litersFuel">Quantos litros é o tanque de combustivel?</label>
                            <Input className="w-40 h-8 rounded-md pl-2 appearance-none" name="litersFuel" type="number" id="litersFuel" placeholder="Ex.: 50" autoComplete="off" />
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="endPlate">Ultimo numero da placa?</label>
                            <Input className="w-40 h-8 rounded-md pl-2 appearance-none" name="endPlate" id="endPlate" type="number" placeholder="Ex.: 2" autoComplete="off" />
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="color">Qual cor do veiculo?</label>
                            <Input className="w-40 h-8 rounded-md pl-2" name="color" id="color" placeholder="Ex.: Verde Lima" autoComplete="off" />
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="km">Qual a Kilometragem total?</label>
                            <Input className="w-40 h-8 rounded-md pl-2 appearance-none" name="km" id="km" type="number" placeholder="Ex.: 12547" autoComplete="off" />
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="bodywork">Qual carroceria do seu carro?</label>
                            <Input className="w-40 h-8 rounded-md pl-2" name="bodywork" id="bodywork" placeholder="Coupé" autoComplete="off" />
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="price">Qual valor do carro?</label>
                            <Input className="w-40 h-8 rounded-md pl-2 appearance-none" name="price" id="price" type="number" placeholder="Ex.: 151478" autoComplete="off" />
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="chassis">Qual chassi do carro?</label>
                            <Input className="w-40 h-8 rounded-md pl-2" name="chassis" id="chassis" placeholder="Ex.: FASD1234124HDAJKH12" autoComplete="off" />
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="carType">Escolha qual tipo de carro</label>
                            <select className="mt-1 w-40 h-8 rounded-md" name="carType" id="carType" defaultValue="POPULAR">
                                <option value="ESPORTIVO">ESPORTIVO</option>
                                <option value="FAMILIAR">FAMILIAR</option>
                                <option value="EXECUTIVO">EXECUTIVO</option>
                                <option value="POPULAR">POPULAR</option>
                            </select>
                        </div>

                        <div className="pl-2 flex flex-col gap-1">
                            <label htmlFor="fuelType">Escolha o tipo de combustivel</label>
                            <select className="mt-1 w-40 h-8 rounded-md mb-4" name="fuelType" id="fuelType" defaultValue="FLEX">
                                <option value="ETANOL">ETANOL</option>
                                <option value="GASOLINA">GASOLINA</option>
                                <option value="DIESEL">DIESEL</option>
                                <option value="HIBRIDO">HIBRIDO</option>
                                <option value="ELETRICO">ELETRICO</option>
                                <option value="FLEX">FLEX</option>
                            </select>
                        </div>

                    </div>

                    <footer className="pb-2 flex justify-center">
                        <Link to={"/"}>
                            <button className="bg-red-300 hover:bg-red-400 w-40 h-8 rounded-md" type="button">Cancelar</button>
                        </Link>
                        <button className="ml-5 w-40 h-8 bg-green-300 hover:bg-green-400 rounded-md" type="submit"> Salvar </button>
                    </footer>

                </form>

            </div>

        </div>
    )
}