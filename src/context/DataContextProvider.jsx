import { createContext, useState, useRef} from "react";
import axios from "axios";

export const DataContext = createContext()

export const DataContextProvider = (props) => {

    const [candidatesData, setCandidatesData] = useState(null) // an array to save the data of the candidates to show
    const [openToCreate, setOpenToCreate] = useState(false) // tell us if the form is open to create new candidate or closed
    const [idToEdit, setIdToEdit] = useState(null) // save the id to the candidate to modify
    const [openToEdit, setOpenToEdit] = useState(false) // tell us if the form is open to edit a candidate or closed
    const [isEditing, setIsEditing] = useState(false)
    const [getDownAnimation, setGetDownAnimation] = useState(false) // helpus to print a class name to start a animation 

    const brandRef = useRef(null)
    const officeRef = useRef(null)
    const candidateRef = useRef(null)

    const fetchData = async () => {
        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL
            const data = await axios.get(`${backendUrl}/candidates/get`)
            let response = data.data.response
            response.sort((a, b) => a.id - b.id) // sort the array per dict.id to avoid change order when update
            response.reverse()// to get the latest user in the top
            setCandidatesData(response)
            return response
        } catch (error) {
            return  {id: null, name: 'Error', brand: 'Error', office: 'Error'}
        }
    }

    const clearForm = () => {
        brandRef.current.value = ''
        officeRef.current.value = ''
        candidateRef.current.value = ''
    }

    return(
        <DataContext.Provider value={{
            candidatesData,
            setCandidatesData,
            fetchData,
            openToCreate,
            setOpenToCreate,
            openToEdit,
            setOpenToEdit,
            brandRef,
            officeRef,
            candidateRef,
            idToEdit,
            setIdToEdit,
            isEditing,
            setIsEditing,
            clearForm,
            getDownAnimation,
            setGetDownAnimation,
            

        }}>
            {props.children}
        </DataContext.Provider>
    )
}