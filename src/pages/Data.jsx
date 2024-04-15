import  LogoName from '../assets/Imagologotipo_motion.svg?react'
import Plus from '../assets/Icon_crear.svg?react'
import Car from '../assets/Icon_vehiculo.svg?react'
import Location from '../assets/Icon_puntoubicacion.svg?react'
import Person from '../assets/Icon_persona.svg?react'

import { FormInput } from '../components/FormInput'

export const Data = () => {
    return(
        <section className=" h-screen font-montserrat">
            <div className="h-[85vh] flex">
                <div>
                    <div className=' relative h-[335px] w-[640px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25);] rounded-[20px] left-[160px] top-[98px]'>
                        <div className=' relative top-[13px] left-[28px]' >
                            <Plus />
                        </div>
                        <div className=' absolute flex flex-col h-full w-full p-8 top-0 justify-around aroun '>
                            <FormInput name='Brand' icon={<Car />} />
                            <FormInput name='Office' icon={<Location />} />
                            <FormInput name='Candidate' icon={<Person />} />
                        </div>
                        


                    </div>
                </div>
                <div>
                    To View
                </div>
            </div>
            <footer className='h-[15vh] flex justify-center items-center'>
                <LogoName />
            </footer>
        </section>
    )
}