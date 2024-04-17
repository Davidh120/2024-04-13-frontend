import { createContext, useState, useRef} from "react";
import axios from "axios";

export const DataContext = createContext()

export const DataContextProvider = (props) => {

    const [candidatesData, setCandidatesData] = useState(null) // an array to save the data of the candidates to show
    const [openToCreate, setOpenToCreate] = useState(false) // tell us if the form is open to create new candidate or closed
    const [idToEdit, setIdToEdit] = useState(null) // save the id to the candidate to modify
    const [openToEdit, setOpenToEdit] = useState(false) // tell us if the form is open to edit a candidate or closed
    const [isEditing, setIsEditing] = useState(false)
    const [getDownAnimation, setGetDownAnimation] = useState(false) // hel pus to print a class name to start a animation 
    const [getUpAnimation, setGetUpAnimation] = useState(false) // help us to print a class name to start a animation 
    const [deletingNow, setDeletingNow] = useState(false) // help us to define what should be render when we are removing a candidate
    const [candidatesData1, setCandidatesData1] = useState(null)  // help us to save in a little time lapse the fst part of the data in data table
    const [candidatesData2, setCandidatesData2] = useState(null) // help us to save in a little time lapse the snd part of the data in data table

    // Creating a references to use that in the input form to get and update the values
    const brandRef = useRef(null)
    const officeRef = useRef(null)
    const candidateRef = useRef(null)

    const fetchData = async () => {
        // will be used a lot of times to refresh the data to show
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
        // will be used a couple times to clear the data on the form
        brandRef.current.value = ''
        officeRef.current.value = ''
        candidateRef.current.value = ''
    }

    // return all the vars on the context to use in different parts
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
            getUpAnimation,
            setGetUpAnimation,
            deletingNow,
            setDeletingNow,
            candidatesData1,
            setCandidatesData1,
            candidatesData2,
            setCandidatesData2,
            

        }}>
            {props.children}
        </DataContext.Provider>
    )
}