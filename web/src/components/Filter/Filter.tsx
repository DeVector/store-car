import * as Toggle from '@radix-ui/react-toggle-group';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carro } from '../../types/carro';

export function Filter() {

    const [typeFuel, setTypeFuel] = useState<string[]>([]);

    const [startYear, setStartYear] = useState<number>();

    const [endYear, setEndYear] = useState<number>();

    const [initP, setInitP] = useState<number>();

    const [endP, setEndP] = useState<number>();

    const [initK, setInitK] = useState<number>();

    const [endK, setEndK] = useState<number>();

    const dataAtual = new Date();
    const yearNow = dataAtual.getFullYear();
    const yearPast = yearNow - 4;

    return (
        <div>
            <div className="m-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">

                <div className="pl-3 pt-3 pr-3 w-60 ring-1 rounded-lg">
                    <div>
                        <p className="font-normal">Ano</p>
                    </div>
                    <div className="flex pt-5">
                        <div>
                            <input className="bg-[#D9D9D9] pl-4 w-20 rounded-md" name='startYear' id='startYear' type="number" placeholder="de" value={startYear} onChange={(ev) => setStartYear(ev.target.valueAsNumber)} />
                            <p className="pt-1 text-sm">Ex.: {yearPast}</p>
                        </div>
                        <div className="pl-10">
                            <input className="bg-[#D9D9D9] pl-4 w-20 rounded-md" name='endYear' id='endYear' type="number" placeholder="até" value={endYear} onChange={(ev) => setEndYear(ev.target.valueAsNumber)} />
                            <p className="pt-1 text-sm">Ex.: {yearNow}</p>
                        </div>
                    </div>
                </div>

                <div className="pl-3 pt-3 pr-3 w-72 ring-1 rounded-lg">
                    <div>
                        <p className="font-normal">Preço</p>
                    </div>
                    <div className="flex pt-5">
                        <div>
                            <input className="bg-[#D9D9D9] pl-4 w-28 rounded-md" name='initP' id='initP' type="number" placeholder="de" value={initP} onChange={(ev) => setInitP(ev.target.valueAsNumber)} />
                            <p className="pt-1 text-sm">Ex.: 10.000,00</p>
                        </div>
                        <div className="pl-10">
                            <input className="bg-[#D9D9D9] pl-4 w-28 rounded-md" name='endP' id='endP' type="number" placeholder="até" value={endP} onChange={(ev) => setEndP(ev.target.valueAsNumber)} />
                            <p className="pt-1 text-sm">Ex.: 100.000,00</p>
                        </div>
                    </div>
                </div>

                <div className="pl-3 pt-3 pr-3 w-72 ring-1 rounded-lg">
                    <div>
                        <p className="font-normal">Quilometragem</p>
                    </div>
                    <div className="flex pt-5">
                        <div>
                            <input className="bg-[#D9D9D9] pl-4 w-28 rounded-md" name='initK' id='initK' type="number" placeholder="de" value={initK} onChange={(ev) => setInitK(ev.target.valueAsNumber)} />
                            <p className="pt-1 text-sm">Ex.: 100</p>
                        </div>
                        <div className="pl-10">
                            <input className="bg-[#D9D9D9] pl-4 w-28 rounded-md" name='endK' id='endK' type="number" placeholder="até" value={endK} onChange={(ev) => setEndK(ev.target.valueAsNumber)} />
                            <p className="pt-1 text-sm">Ex.: 70000</p>
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
                            className={`w-4 h-4 mr-24 rounded-[100%] ${typeFuel.includes('0') ? 'bg-zinc-800' : 'bg-[#D9D9D9]'}`} >
                            <p className='pl-5'>Gasolina</p>
                        </Toggle.Item>


                        <Toggle.Item
                            value='1'
                            title='Etanol'
                            className={`w-4 h-4 rounded-[100%] ${typeFuel.includes('1') ? 'bg-zinc-800' : 'bg-[#D9D9D9]'}`} >
                            <p className='pl-5'>Etanol</p>
                        </Toggle.Item>


                        <Toggle.Item
                            value='2'
                            title='Hibrido'
                            className={`w-4 h-4 rounded-[100%] ${typeFuel.includes('2') ? 'bg-zinc-800' : 'bg-[#D9D9D9]'}`} >
                            <p className='pl-5'>Hibrido</p>
                        </Toggle.Item>


                        <Toggle.Item
                            value='3'
                            title='Eletrico'
                            className={`w-4 h-4 mt-5 rounded-[100%] ${typeFuel.includes('3') ? 'bg-zinc-800' : 'bg-[#D9D9D9]'}`} >
                            <p className='pl-5'>Eletrico</p>
                        </Toggle.Item>


                        <Toggle.Item
                            value='4'
                            title='Diesel'
                            className={`w-4 h-4 mt-5 rounded-[100%] ${typeFuel.includes('4') ? 'bg-zinc-800' : 'bg-[#D9D9D9]'}`} >
                            <p className='pl-5'>Diesel</p>
                        </Toggle.Item>


                    </Toggle.Root>
                </div>

            </div>
            <div className='w-screen flex justify-center'>
                <Link to={`/carros/${startYear}/${endYear}/${initP}/${endP}/${initK}/${endK}`}>
                    <button className='bg-green-300 rounded-lg p-1 w-28 hover:bg-green-600'>Filtrar</button>
                </Link>
            </div>
        </div>
    )
}