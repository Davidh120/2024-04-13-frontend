


export const FormInput = (props) => {
    // just return an input 
    // receives as props:
    //  icon: a svg React component
    //  max: the max length enabled to the input
    //  name: used as id and placeholder
    //  reference: to manipulate and obtain data

    return(
        <div className="flex w-full justify-around" >
            {props.icon}
            <label htmlFor={props.name}>
                <input maxLength={props.max} type="text" name={props.name} id={props.name} placeholder={props.name} ref={props.reference} className=" text-gray1 p-2 font-montserrat font-[500] w-[411.04px] h-[62px] text-[28.66px] rounded-2xl border-gray1 border-2  "/>
            </label>
        </div>
        
    )
}