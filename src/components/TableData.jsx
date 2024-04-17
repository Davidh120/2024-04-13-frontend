import { useContext } from 'react'

import axios from "axios";

import {DataContext} from '../context/DataContextProvider'

import Modifier from '../assets/Icon_editar1.svg?react'
import Remover from '../assets/Icon_eliminar1.svg?react'
import ModifierGray from '../assets/Icon_editar.svg?react'
import RemoverGray from '../assets/Icon_eliminar.svg?react'


export const TableData = (props) => {
    // show the data from any dict on the array of the db response
    // receives as props:
    //  brand: brand name
    //  office: office name
    //  candidate: candidate name
    //  id: the unique id from the candidate

    const dataContext = useContext(DataContext)

    const deleteCandidate = async (id) => {
         // to reset if you are editing when push delete
        dataContext.setIsEditing(false)
        dataContext.setOpenToEdit(false)
        // create a witness and tho arrays, divides the candidates data on the two arrays to
        // allow the animation on the second half
        let changeArray = false
        let arrayA = []
        let arrayB = []
        for (let candidate of dataContext.candidatesData){
            if (candidate.id == id){
                changeArray = true
            }
            if (!changeArray){
                arrayA.push(candidate)
            }else {
                arrayB.push(candidate)
            }
        }
        dataContext.setCandidatesData(dataContext.candidatesData.filter((candidate) => (candidate.id != id))) // updates the candidatesData array to update that wo require the backend 
        dataContext.setCandidatesData1(arrayA)
        dataContext.setCandidatesData2(arrayB)
        dataContext.setDeletingNow(true) // indicates to data that render two arrays to able the animation in a half of the candidates data
        dataContext.setGetUpAnimation(true) // starts the animation to get up the snd part of the candidates data
        
        setTimeout( async () => {
            // here removes the fst item on arrayB once time ended the animation adn set that on the snd half of candidates data
            // then delete the item on the db and uses fetch data to call the data and verify if info in db == info in state
            // finally closes the animation, set deletingNow to false to render the original candidatesData and clear the form
            try {
                arrayB.shift()
                dataContext.setCandidatesData2([...arrayB])
                const backendUrl = import.meta.env.VITE_BACKEND_URL
                const data = await axios.delete(`${backendUrl}/candidates/delete/${id}`)
                console.log(data)
                dataContext.fetchData()
                dataContext.setGetUpAnimation(false) // qap
                dataContext.setDeletingNow(false)
                dataContext.brandRef.current.value = props.brand
                dataContext.officeRef.current.value = props.office
                dataContext.candidateRef.current.value = props.candidate

            } catch (error) {
                console.log(error)
            }
        }, 201);
    }

    const sendCandidateToUpdate = () => {
        // uses the state to send the id to update and open the form
        // then set the inputs values with the info on the TableData component
        dataContext.setOpenToEdit(true)
        dataContext.setIsEditing(true)
        dataContext.setOpenToCreate(false)
        dataContext.setIdToEdit(props.id)
        dataContext.brandRef.current.value = props.brand
        dataContext.officeRef.current.value = props.office
        dataContext.candidateRef.current.value = props.candidate
    }

    const printRemover = () => {
        // print the remover button, if is updating any Table Data, return one, if is not return the other
        if (dataContext.isEditing && dataContext.idToEdit != props.id){
            return <RemoverGray/>
        }else {
            return <Remover/>
        }
    }

    const printModifier = () => {
        // print the modifier button, if is updating any Table Data, return one, if is not return the other
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