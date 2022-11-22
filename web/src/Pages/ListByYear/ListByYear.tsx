import { useParams } from "react-router"
import { DescribYear } from "../../components/DescribYear/DescribYear";
import { Header } from "../../components/Header/Header";


export function ListByYear() {

    const { startYear } = useParams();

    const { endYear } = useParams();

    const { initP } = useParams();

    const { endP } = useParams();

    const { initK } = useParams();

    const { endK } = useParams();

    console.log(initP, endP, initK, endK);

    return (
        <div>

            <Header />

            <DescribYear 
                startYear={`${startYear}`} 
                endYear={`${endYear}`}
                initP={`${initP}`}
                endP={`${endP}`}
                initK={`${initK}`}
                endK={`${endK}`}
            />

        </div>
    )
}