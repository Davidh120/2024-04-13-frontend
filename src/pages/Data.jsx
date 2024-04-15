import { useEffect, useState } from 'react'

import axios from "axios";

import { FormInput } from '../components/FormInput'
import { TableHeader } from '../components/TableHeader'
import { TableData } from '../components/TableData'
import { DataLoading } from '../components/DataLoading'
import { NotDataJet} from '../components/NotDataJet'

import  LogoName from '../assets/Imagologotipo_motion.svg?react'
import Plus from '../assets/Icon_crear.svg?react'
import Car from '../assets/Icon_vehiculo.svg?react'
import Location from '../assets/Icon_puntoubicacion.svg?react'
import Person from '../assets/Icon_persona.svg?react'



export const Data = () => {

    const [candidatesData, setCandidatesData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const backendUrl = import.meta.env.VITE_BACKEND_URL
                const data = await axios.get(`${backendUrl}/candidates/get`)
                let response = data.data.response
                response.reverse()
                setCandidatesData(response)
                return response
            } catch (error) {
                return  {'response': 'not data'}
            }
        }
        fetchData()
    }, [])

    const printData = () => {
        if (candidatesData == null){
            return (
                <DataLoading />     
            )
        } else if (candidatesData == []){
            return (
                <NotDataJet />
            )
        } else {                
            return candidatesData.map((item) => (
                <TableData key={item.id}  brand={item.brand} office={item.office} candidate={item.name} />
            ))
            
        }
    }

     


    return(
        <section className=" h-screen font-montserrat">
            <div className="h-[85vh] flex">
                <div>
                    <div className=' relative h-[335px] w-[640px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25);] rounded-[20px] ml-[160px] mt-[98px]'>
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
                <div className='mt-[98px] w-full '>
                    <div className='px-16'>
                        <div className='flex justify-between '>
                            <TableHeader name='Marca' width={246} />
                            <TableHeader name='Sucursal' width={246} />
                            <TableHeader name='Aspirante' width={385} />
                        </div>
                        <div className=''>                 
                            {printData()}
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <footer className='h-[15vh] flex justify-center items-center'>
                <LogoName />
            </footer>
        </section>
    )
}