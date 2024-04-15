import { createContext, useState, useRef} from "react";
import axios from "axios";

export const DataContext = createContext()

export const DataContextProvider = (props) => {

    const [candidatesData, setCandidatesData] = useState(null) // an array to save the data of the candidates to show
    const [openToCreate, setOpenToCreate] = useState(false) // tell us if the form is open to create new candidate or closed
    const [openToEdit, setOpenToEdit] = useState(false) // tell us if the form is open to edit a candidate or closed
    
    const brandRef = useRef(null)
    const officeRef = useRef(null)
    const candidateRef = useRef(null)

    const fetchData = async () => {
        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL
            const data = await axios.get(`${backendUrl}/candidates/get`)
            let response = data.data.response
            response.reverse()
            console.log(response)
            setCandidatesData(response)
            return response
        } catch (error) {
            return  {id: null, name: 'Error', brand: 'Error', office: 'Error'}
        }
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

        }}>
            {props.children}
        </DataContext.Provider>
    )
}