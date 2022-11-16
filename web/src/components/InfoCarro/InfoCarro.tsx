
interface InfoCarro {

    id?: number;
    nameMarca?: string;
    name?: string;
    yearCar?: number;
    km?: number;
    bodywork?: string;
    fuelType?: string;
    endPlate?: number;
    color?: string;
    description?: string;

}

export function InfoCarro( props: InfoCarro) {

    const kmEdit = (props.km)?.toLocaleString('pt-br');

    return (
        <div>
            
            <div className="pt-3 pl-3 pr-48 pb-48 w-auto bg-slate-300 rounded-lg">

                <p>{props.id}</p>

                <p className="text-5xl font-semibold">{props.nameMarca} {props.name}</p>

                <p className="text-3xl font-semibold">{props.description}</p>

                <div className="grid grid-cols-4">

                    <div className="ml-2 mt-4">
                        <p>Ano</p>
                        <p>{props.yearCar}</p>
                    </div>

                    <div className="ml-2 mt-4">
                        <p>KM</p>
                        <p>{kmEdit}</p>
                    </div>

                    <div className="ml-2 mt-4">
                        <p>Cámbio</p>
                        <p>Automática</p>
                    </div>

                    <div className="ml-2 mt-4">
                        <p>Carroceria</p>
                        <p>{props.bodywork}</p>
                    </div>

                    <div className="ml-2 mt-4">
                        <p>Combustível</p>
                        <p>{props.fuelType}</p>
                    </div>

                    <div className="ml-2 mt-4">
                        <p>Final Placa</p>
                        <p>{props.endPlate}</p>
                    </div>

                    <div className="ml-2 mt-4">
                        <p>Cor</p>
                        <p>{props.color}</p>
                    </div>

                    <div className="ml-2 mt-4">
                        <p>IPVA Pago</p>
                        <p>Sim</p>
                    </div>

                </div>

            </div>
        </div>
    )
}