import {useContext} from 'react'

import axios from 'axios' // to call the backend

import { DataContext } from '../context/DataContextProvider'; 
 
import { FormInput } from './FormInput'

// importing the svgs as ReactElements
import Car from '../assets/Icon_vehiculo.svg?react'
import Location from '../assets/Icon_puntoubicacion.svg?react'
import Person from '../assets/Icon_persona.svg?react'
import Plus from '../assets/Icon_crear.svg?react'

import CarColor from '../assets/Icon_vehiculo1.svg?react'
import LocationColor from '../assets/Icon_puntoubicacion1.svg?react'
import PersonColor from '../assets/Icon_persona1.svg?react'
import Done from '../assets/Icon_confirmar.svg?react'
import Cancel from '../assets/Icon_cancelar.svg?react'

export const DataForm = () => {

    const dataContext = useContext(DataContext)
    // use the context and states that create tailwind class to animate the form open
    const setOpenToCreate = () => {
        dataContext.setOpenToCreate(true)
        dataContext.setOpenToEdit(false)
        dataContext.setIsEditing(false)
    }

    const setCloseToCreate = () => {
        // use the context and states that create tailwind class to animate the form close and clear the data on the inputs
        dataContext.setOpenToCreate(false)
        dataContext.clearForm()
    }

    const setCloseToEdit = () => {
        // use the context and states that create tailwind class to animate the form close and clear the data on the inputs
        dataContext.setOpenToEdit(false)
        dataContext.setIsEditing(false)
        dataContext.clearForm()
    }

    const createCandidate = () => {
        // fst verify if the data has the minimal length that the backend require
        if (dataContext.candidateRef.current.value.length < 4 || 
            dataContext.brandRef.current.value.length < 1  || 
            dataContext.officeRef.current.value.length < 4 ){
            return null
        }
        // start a animation to moving the data in the table to the button creating space to the new candidate
        dataContext.setGetDownAnimation(true)
        // uses a timeout to run code after the animation ends
        setTimeout( async () => {
            // create the new value in the context to render data before created in the db to get a fluid xperiance
            dataContext.setCandidatesData([
                {id: 0, name: dataContext.candidateRef.current.value, brand: dataContext.brandRef.current.value, office: dataContext.officeRef.current.value},
                ...dataContext.candidatesData
            ])
            
            try {
                // make the register on the db
                const backendUrl = import.meta.env.VITE_BACKEND_URL
                const data = await axios.post(`${backendUrl}/candidates/new`,
                    {
                        "brand": dataContext.brandRef.current.value,
                        "office": dataContext.officeRef.current.value,
                        "candidate": dataContext.candidateRef.current.value
                    }
                ) 
                // update the data making a new fetch making sure all is ok, clear data form, remove the data in labels and closes the animation
                dataContext.fetchData()
                dataContext.clearForm()
                setCloseToCreate()
                dataContext.setGetDownAnimation(false)
            } catch (error) {
                // in catch case shows the error and rename the data to show if data was updatedd
                console.log(error)
                dataContext.fetchData()
            }
        }, 200);
        
        
    }

    const updateCandidate = async () => {
    // use the context and states that create tailwind class to animate the form open
        if (dataContext.candidateRef.current.value.length < 4 || 
            dataContext.brandRef.current.value.length < 1  || 
            dataContext.officeRef.current.value.length < 4 ){
            return null
        }
        // create a array and uses idToEdit in the context to find the element and update it in the rendered components before to save it in db to show a Smooth experience
        const new_array = dataContext.candidatesData.map((item) => {
            if (item.id == dataContext.idToEdit){
                item.name = dataContext.candidateRef.current.value
                item.office = dataContext.officeRef.current.value
                item.brand = dataContext.brandRef.current.value
                console.log(item)
            }
            return item
        })
        dataContext.setCandidatesData(new_array)
        // save the changes in the db
        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL
            await axios.put(`${backendUrl}/candidates/update`,
                {
                    "uid": dataContext.idToEdit,
                    "brand": dataContext.brandRef.current.value,
                    "office": dataContext.officeRef.current.value,
                    "candidate": dataContext.candidateRef.current.value
                }
            )
            // update the data making a new fetch making sure all is ok, clear data form, remove the data in labels and closes the animation
            dataContext.fetchData()
            setCloseToEdit()

        } catch (error) {
            // in catch case shows the error and rename the data to show if data was updated
            console.log(error)
            dataContext.fetchData()
        }
    }

    return(

        <div className={` relative w-[640px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.25);] rounded-[20px] ml-[160px] mt-[98px] transition-height duration-150 ${dataContext.openToCreate || dataContext.openToEdit ? 'h-[393px]' : 'h-[335px]'   }`}>
            <div className=' relative top-[13px] left-[28px] z-10 hover:cursor-pointer  ' onClick={() => setOpenToCreate()} >
                <Plus />
            </div>

            <div className=' absolute flex flex-col h-full w-full p-8 top-0 justify-around  '>
                <FormInput  max ={20} reference={dataContext.brandRef} name='Marca' icon={dataContext.openToCreate || dataContext.openToEdit ? <CarColor/ > : <Car/ > } />
                <FormInput  max ={20} reference={dataContext.officeRef} name='Sucursal' icon={dataContext.openToCreate || dataContext.openToEdit ? <LocationColor/ > : <Location/ >} />
                <FormInput  max ={30} reference={dataContext.candidateRef} name='Aspirante' icon={dataContext.openToCreate || dataContext.openToEdit ? <PersonColor/ > : <Person/ >} />

                <div className={`${dataContext.openToCreate || dataContext.openToEdit ? '' : 'hidden'} w-full flex justify-around `}>
                    <div className='w-[49px]'>

                    </div> 
                    {/* 
                        This div contains two divs 
                        in case wit the state and context its detected that the user wants to update or create a candidate shows the respective div
                    */}
                    <div className={`flex justify-between w-[411.03px] ${dataContext.openToCreate ? '' : 'hidden'} animate-erase-in-left  `}>
                        <button className='h-[45px] w-[175px] border-2 border-red1 rounded-[10px] text-[28.66px] text-gray1 font-[500] ' onClick={() => {setCloseToCreate()}}>
                            Cancelar
                        </button>
                        <button className='h-[45px] w-[175px] border-2 border-blue2 rounded-[10px] text-[28.66px] text-gray1 font-[500]' onClick={()=> createCandidate()}>
                            Crear
                        </button>
                    </div>

                    <div className={`flex justify-end w-[411.03px] ${dataContext.openToEdit ? '' : 'hidden'}  `}>
                    <button className='mr-5' onClick={()=> setCloseToEdit()}>
                            <Cancel />
                        </button>
                        <button className='' onClick={() => {updateCandidate()}}>
                            <Done />
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
}