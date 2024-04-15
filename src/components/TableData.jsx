import { useContext } from 'react'

import axios from "axios";

import {DataContext} from '../context/DataContextProvider'

import Modifier from '../assets/Icon_editar1.svg?react'
import Remover from '../assets/Icon_eliminar1.svg?react'


export const TableData = (props) => {

    const dataContext = useContext(DataContext)

    const deleteCandidate = async (id) => {
        dataContext.setCandidatesData(dataContext.candidatesData.filter((candidate) => (candidate.id != id)))

        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL
            const data = await axios.delete(`${backendUrl}/candidates/delete/${id}`)
            console.log(data)

            dataContext.fetchData()

        } catch (error) {
            console.log(error)
        }
        
    }

    return(
        <div className='flex font-montserrat text-gray1 font-[500] text-[28.73px] border-b-[2.3px] border-red2 h-[50px] justify-between'>
            <p className='w-[246px] flex items-center'>
                {props.brand}
            </p>
            <p className='w-[246px] flex items-center'>
                {props.office}
            </p>
            <div className=' flex w-[385px] justify-between items-center'>
                <p>
                    {props.candidate}
                </p>
                <div className='flex items-center'> 
                    <div>
                        <Modifier />
                    </div>
                    <div className='ml-3' onClick={() => deleteCandidate(props.id)} >
                        <Remover/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}