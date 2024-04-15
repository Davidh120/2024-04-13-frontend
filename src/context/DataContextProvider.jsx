import { createContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext()

export const DataContextProvider = (props) => {

    const [candidatesData, setCandidatesData] = useState(null)
    

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
        }}>
            {props.children}
        </DataContext.Provider>
    )
}