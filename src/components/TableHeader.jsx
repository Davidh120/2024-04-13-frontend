


export const TableHeader = (props) => {


    return(
        <p className={`h-[63px] text-center font-montserrat text-[36.82px] font-[500] text-white bg-red2 w-[${props.width}px] z-10`} >
            {props.name}
        </p>
    )
}