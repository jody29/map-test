import { createContext, useState } from "react";


export const YearContext = createContext()

export const Provider = ({ children }) => {
    const [selectedYear, setYear] = useState('2019')
    const [selectedLocation, setLocation] = useState(null)

    return (
        <>
            <YearContext.Provider value={{ selectedYear, setYear, selectedLocation, setLocation }}>
                {children}
            </YearContext.Provider>
        </>
    )
}