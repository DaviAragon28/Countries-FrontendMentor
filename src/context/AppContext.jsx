import { createContext, useState } from "react";

const AppContext = createContext(null)

function AppProvider ({ children }) {
    const [inputValue, setInputValue] = useState('')
    const [region, setRegion] = useState('all')
    const [darkMode, setDarkMode] = useState(true)

    const onHandleSelect = (e) => {
        setRegion(e.target.value)
    }
    
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }


    return (
        <AppContext.Provider value={{darkMode, region, onHandleSelect, handleDarkMode, handleInput, inputValue, setInputValue}}>
            { children }
        </AppContext.Provider>
    )
} 


export  { AppContext, AppProvider }