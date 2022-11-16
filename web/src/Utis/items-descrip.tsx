
interface ItemsProps {
    title: string;
}

export function ItemsDescrip(props: ItemsProps) {

    return(
        <p className="pt-5 pl-3 text-lg font-semibold">{props.title}</p>
    )

}