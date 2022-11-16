import { Link } from 'react-router-dom';

interface CarType {
    type: string;
    bannerPhoto: string;
    nameType: string;
}

export function Categories(props: CarType) {

    return (
        <div className='pt-6 mb-4 pl-3 grid'>

            <div >

                <div className='pt-1 ml-6 mr-6 text-center relative'>
                    <Link to={`/carros/categoria/${props.type}`}>
                        <img className='w-screen' src={props.bannerPhoto} alt={props.nameType} />
                        <p className='pt-11 top-2 right-14 text-white text-7xl text-stroke-black text-stroke-2 absolute'>{props.nameType}</p>
                    </Link>
                </div>

            </div>

        </div>
    )

}