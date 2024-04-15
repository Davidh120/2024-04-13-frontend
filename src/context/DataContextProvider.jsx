import { createContext, useState } from "react";

export const DataContext = createContext()


export const DataContextProvider = (props) => {

    const [candidatesData, setCandidatesData] = useState(null)

    return(
        <DataContext.Provider value={{
            candidatesData,
            setCandidatesData,
        }}>
            {props.children}
        </DataContext.Provider>
    )
}