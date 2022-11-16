/**Import de imagens */
import bannerPhoto from '../../assets/banner-photo.png';
import bannerAudi from '../../assets/banner-audi-espor.png';
import bannerFamiliar from '../../assets/banner-car-family.png';
import bannerExecutivo from '../../assets/banner-carro-luxo.png';

import { Categories } from '../../components/categories/Categories';
import { Footer } from '../../components/Footer/Footer';
import { HeaderSearch } from '../../components/HeaderSearch/HeaderSearch';

interface CarType {
    id: number;
    nameType: string;
    bannerPhoto: string;
    type: string;
}

export function Home() {

    const carTypes = [
        {
            id: 0,
            type: "EXECUTIVO",
            nameType: "Carro Executivo",
            bannerPhoto: bannerExecutivo
        },
        {
            id: 1,
            type: "FAMILIAR",
            nameType: "Carro Familiar",
            bannerPhoto: bannerFamiliar
        },
        {
            id: 2,
            type: "ESPORTIVO",
            nameType: "Carro Espostivo",
            bannerPhoto: bannerAudi
        }
    ]

    return (
        <div>
            <HeaderSearch />
            <div className='p-1 pt-2'>
                <img src={bannerPhoto} alt="Imagen do banner" className='bg-no-repeat bg-cover w-screen' />
            </div>

            <h3 className='pt-6 pl-3'>C A T E G O R I A S</h3>

            { carTypes.map( carType => {
                return(
                    <Categories 
                        key={carType.id}
                        type={carType.type}
                        bannerPhoto={carType.bannerPhoto}
                        nameType={carType.nameType}
                    />
                )
            })}
            <Footer />
        </div>

    )
}