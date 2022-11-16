import { Link } from 'react-router-dom';

interface CarroCard {

    id: number;
    nomeMarca: string;
    name: string;
    price: string;
    yearCar: number;
    km: number;
    bannerUrl: string;

}

export function Card(props: CarroCard) {

    const kmEdit = (props.km).toLocaleString('pt-br');

    return (
        <div>

            <div className="m-2 w-80 h-auto rounded-lg bg-slate-500">

                <Link to={`/carros/${props.nomeMarca}/${props.name}/${props.id}`}>

                    <img className='w-[100%] object-cover rounded-md' src={props.bannerUrl} alt="" />

                    <p className='ml-2 mt-1 text-xl'>{props.nomeMarca} {props.name}</p>

                    <p className='ml-2 pt-6 text-4xl font-semibold'>{props.price}</p>

                    <div className='ml-2 mr-2 pt-2 pb-2 justify-between flex'>

                        <p className='text-sm'>{props.yearCar}</p>

                        <p className='text-sm'>{kmEdit} KM</p>

                    </div>
                </Link>
            </div>

        </div>
    )
}