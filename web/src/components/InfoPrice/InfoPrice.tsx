
interface PriceCar {
    price: string;
}

export function InfoPrice(props: PriceCar) {
    return(
        <div>

            <div className="pl-3 pt-3 pr-11 pb-11 w-auto grid justify-center  bg-slate-300 rounded-md">

                <p className="text-5xl font-semibold ml-1">{props.price}</p>

                <p className="ml-1">Envie uma mensagem ao vendendor</p>

                <form className="grid">

                    <input className="border-2 h-10 border-slate-800 rounded-md mt-2 " type="text" placeholder="Nome*" />

                    <input className="border-2 h-10 border-slate-800 rounded-md mt-2 " type="text" placeholder="E-mail*" />

                    <input className="border-2 h-10 border-slate-800 rounded-md mt-2 " type="text" placeholder="Telefone*" />

                    <label className="ml-1 mt-2">Messagem*</label>

                    <textarea className="border-2 h-36 border-slate-800 rounded-md mt-2  p-1" name="Message" autoComplete="nope" maxLength={500} placeholder="Olá, tenho interesse no veículo. Por favo entre em contato."></textarea>
                    
                </form>

                <button className="bg-red-400 hover:bg-red-500 mt-4 mb-4 rounded-md "> ENVIAR MENSAGEM </button>
            </div>
        </div>
    )
}