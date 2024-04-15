


import { FormInput } from './FormInput'

import Car from '../assets/Icon_vehiculo.svg?react'
import Location from '../assets/Icon_puntoubicacion.svg?react'
import Person from '../assets/Icon_persona.svg?react'

export const DataForm = () => {

    return(
        <div className=' absolute flex flex-col h-full w-full p-8 top-0 justify-around aroun '>
            <FormInput name='Marca' icon={<Car />} />
            <FormInput name='Sucursal' icon={<Location />} />
            <FormInput name='Aspirante' icon={<Person />} />
        </div>
    )
}