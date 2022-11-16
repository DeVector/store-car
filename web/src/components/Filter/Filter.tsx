import * as Toggle from '@radix-ui/react-toggle-group';

import { useEffect, useState } from 'react';

export function Filter() {

    const [typeFuel, setTypeFuel] = useState<string[]>([]);

    const [startYear, setStartYear] = useState<number>();

    const [endYear, setEndYear] = useState<number>();

    useEffect( () => {
        if (startYear === null && endYear === null) {
            return;
        } else {
            handleYearCar(startYear!, endYear!);
        }

    }, []);

    async function handleYearCar(startYear: number, endYear: number){
        const response = await fetch(`http://localhost:8080/carro/years/${startYear}&${endYear}`);
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="m-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">

            <div className="pl-3 pt-3 pr-3 w-60 ring-1 rounded-lg">
                <div>
                    <p className="font-normal">Ano</p>
                </div>
                <div className="flex pt-5">
                    <div>
                        <input className="bg-[#D9D9D9] pl-4 w-20 rounded-md" type="number" placeholder="de" value={startYear} onChange={(ev) => setStartYear(ev.target.valueAsNumber)} />
                        <p className="pt-1 text-sm">Ex.: 2014</p>
                    </div>
                    <div className="pl-10">
                        <input className="bg-[#D9D9D9] pl-4 w-20 rounded-md" type="number" placeholder="até" value={endYear} onChange={(ev) => setEndYear(ev.target.valueAsNumber)}/>
                        <p className="pt-1 text-sm">Ex.: 2020</p>
                    </div>
                </div>
            </div>

            <div className="pl-3 pt-3 pr-3 w-72 ring-1 rounded-lg">
                <div>
                    <p className="font-normal">Preço</p>
                </div>
                <div className="flex pt-5">
                    <div>
                        <input className="bg-[#D9D9D9] pl-4 w-28 rounded-md" type="number" placeholder="de" />
                        <p className="pt-1 text-sm">Ex.: 20.000,00</p>
                    </div>
                    <div className="pl-10">
                        <input className="bg-[#D9D9D9] pl-4 w-28 rounded-md" type="number" placeholder="até" />
                        <p className="pt-1 text-sm">Ex.: 70.000,00</p>
                    </div>
                </div>
            </div>

            <div className="pl-3 pt-3 pr-3 w-72 ring-1 rounded-lg">
                <div>
                    <p className="font-normal">Quilometragem</p>
                </div>
                <div className="flex pt-5">
                    <div>
                        <input className="bg-[#D9D9D9] pl-4 w-28 rounded-md" type="number" placeholder="de" />
                        <p className="pt-1 text-sm">Ex.: 2.000</p>
                    </div>
                    <div className="pl-10">
                        <input className="bg-[#D9D9D9] pl-4 w-28 rounded-md" type="number" placeholder="até" />
                        <p className="pt-1 text-sm">Ex.: 7.000</p>
                    </div>
                </div>
            </div>

            <div className='pl-3 pr-3 pt-3 w-80 ring-1 rounded-lg'>
                <div>
                    <p className='font-normal'>Combustivel</p>
                </div>

                <Toggle.Root 
                    type='multiple'
                    value={typeFuel}
                    onValueChange={setTypeFuel}
                    className='grid grid-cols-3 pt-2 pb-2'
                >
                    <Toggle.Item 
                        value='0' 
                        title='Gasolina' 
                        className= {`w-4 h-4 mr-24 rounded-[100%] ${typeFuel.includes('0') ? 'bg-zinc-800' : 'bg-[#D9D9D9]' }`} >
                        <p className='pl-5'>Gasolina</p>
                    </Toggle.Item>
                    

                    <Toggle.Item 
                        value='1'
                        title='Etanol' 
                        className= {`w-4 h-4 rounded-[100%] ${typeFuel.includes('1') ? 'bg-zinc-800' : 'bg-[#D9D9D9]' }`} >
                        <p className='pl-5'>Etanol</p>
                    </Toggle.Item>
                    

                    <Toggle.Item 
                        value='2'
                        title='Hibrido' 
                        className= {`w-4 h-4 rounded-[100%] ${typeFuel.includes('2') ? 'bg-zinc-800' : 'bg-[#D9D9D9]' }`} >
                        <p className='pl-5'>Hibrido</p>
                    </Toggle.Item>
                    

                    <Toggle.Item 
                        value='3'
                        title='Eletrico' 
                        className= {`w-4 h-4 mt-5 rounded-[100%] ${typeFuel.includes('3') ? 'bg-zinc-800' : 'bg-[#D9D9D9]' }`} >
                        <p className='pl-5'>Eletrico</p>
                    </Toggle.Item>
                    

                    <Toggle.Item 
                        value='4'
                        title='Diesel' 
                        className= {`w-4 h-4 mt-5 rounded-[100%] ${typeFuel.includes('4') ? 'bg-zinc-800' : 'bg-[#D9D9D9]' }`} >
                        <p className='pl-5'>Diesel</p>
                    </Toggle.Item>
                    

                </Toggle.Root>
            </div>

        </div>
    )
}