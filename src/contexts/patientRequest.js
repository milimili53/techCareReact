import { useEffect, createContext, useContext, useState } from "react";

const username = "coalition";
const password = "skills-test";
const auth = btoa(`${username}:${password}`); 


const PatientContext = createContext();

export function PatientProvider({ children }) {
    
    const [patients, setPatients] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
                    method: "GET",
                    headers: {"Authorization": `Basic ${auth}`},
                });
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setPatients(data);
            } catch (error) {
                console.error("There has been a problem with your fetch operation:", error);
            }
        };
        
        fetchData();
    }, [])
    
    
    
    return(
        <PatientContext.Provider value={patients}>
            {children}
        </PatientContext.Provider>
    )
    
}

export const usePatients = () => {
    return useContext(PatientContext);
};