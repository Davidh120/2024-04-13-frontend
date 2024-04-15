


export const FormInput = (props) => {

    return(
        <div className="flex w-full justify-around" >
            {props.icon}
            <label htmlFor={props.name}>
                <input type="text" name={props.name} id={props.name} placeholder={props.name} ref={props.reference} className=" text-gray1 p-2 font-montserrat font-[500] w-[411.04px] h-[62px] text-[28.66px] rounded-2xl border-gray1 border-2  "/>
            </label>
        </div>
        
    )
}