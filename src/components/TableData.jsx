import { useContext } from 'react'

import axios from "axios";

import {DataContext} from '../context/DataContextProvider'

import Modifier from '../assets/Icon_editar1.svg?react'
import Remover from '../assets/Icon_eliminar1.svg?react'
import ModifierGray from '../assets/Icon_editar.svg?react'
import RemoverGray from '../assets/Icon_eliminar.svg?react'


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

    const sendCandidateToUpdate = () => {
        dataContext.setOpenToEdit(true)
        dataContext.setIdToEdit(props.id)
        dataContext.brandRef.current.value = props.brand
        dataContext.officeRef.current.value = props.office
        dataContext.candidateRef.current.value = props.candidate
        dataContext.setIsEditing(true)
    }

    const printRemover = () => {
        if (dataContext.isEditing && dataContext.idToEdit != props.id){
            return <RemoverGray/>
        }else {
            return <Remover/>
        }
    }

    const printModifier = () => {
        if (dataContext.isEditing && dataContext.idToEdit != props.id){
            return <ModifierGray />
        }else {
            return <Modifier />
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
                    <div className='hover:cursor-pointer' onClick={() => sendCandidateToUpdate()}>
                        {printModifier()}
                    </div>
                    <div className='ml-3 hover:cursor-pointer' onClick={() => deleteCandidate(props.id)} >
                        {printRemover()}
                    </div>
                </div>
                
            </div>
        </div>
    )
}