import { useParams } from "react-router"
import { DescribYear } from "../../components/DescribYear/DescribYear";
import { Header } from "../../components/Header/Header";


export function ListByYear() {

    const { startYear } = useParams();

    const { endYear } = useParams();

    return (
        <div>

            <Header />

            <DescribYear 
                startYear={`${startYear}`} 
                endYear={`${endYear}`}
            />

        </div>
    )
}