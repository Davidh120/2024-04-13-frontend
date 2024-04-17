export const TableHeader = (props) => {
    // just shows the header of the table that will show us data
    // reveices as props
    //  name: to render that in the header
    //  width: in this case we are using absolute measurements, the width is required depending the data to show
    return(
        <p className={`h-[63px] text-center font-montserrat text-[36.82px] font-[500] text-white bg-red2 w-[${props.width}px] z-10`} >
            {props.name}
        </p>
    )
}