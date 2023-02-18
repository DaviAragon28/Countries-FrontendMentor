import { RiSearchEyeLine } from 'react-icons/ri'
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'



export function Input() {
    const { darkMode, handleInput } = useContext(AppContext)

    const handleButton = (e) => {
        e.preventDefault()
    }

    
    return (
        <form className={`h-14 shadow-md flex items-center rounded-md overflow-hidden md:w-80 `}>
            <input onChange={handleInput} placeholder="Colombia, Germany, Brazil..." className={`pl-3 flex-1 h-full outline-none transition-colors ${darkMode ? 'bg-darkModeElements text-white' : 'bg-white'}`} />
            <button onClick={handleButton} className={`px-4 h-full border-l transition-colors ${darkMode ? 'bg-darkModeElements text-white border-darkModeBackground' : 'bg-white'}`}><RiSearchEyeLine size={24} color='gray' /></button>
        </form>
    )
}