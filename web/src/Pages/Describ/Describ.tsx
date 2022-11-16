import { useParams } from "react-router"
import { DescribCard } from "../../components/DescribCard/DescribCard";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";



export function Describ() {

    const { id }  = useParams();

    const { nameCar } = useParams();

    const { nameMarca } = useParams();

    return(
        <div>
            <Header />
            <DescribCard 
                id={`${id}`} 
                nameCar={`${nameCar}`}
                nameMarca={`${nameMarca}`}
            />
            <Footer />
        </div>
    )

}