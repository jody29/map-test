import { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const YearContext = createContext()

export const Provider = ({ children }) => {
    const [selectedYear, setYear] = useState('2021')

    return (
        <>
            <YearContext.Provider value={{ selectedYear, setYear }}>
                {children}
            </YearContext.Provider>
        </>
    )
}