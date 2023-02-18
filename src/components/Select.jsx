import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'



export function Select() {
    const { onHandleSelect, region } = useContext(AppContext)
    const { darkMode } = useContext(AppContext)
     
    return (
        <select value={region} onChange={onHandleSelect} name="select" className={`font-semibold w-40 h-14 rounded-md shadow-md px-3 outline-none cursor-pointer ${darkMode ? 'bg-darkModeElements text-white' : 'bg-white'}`}>
            <option className="font-semibold" value="all">All</option>
            <option className="font-semibold" value="africa">Africa</option>
            <option className="font-semibold" value="america">America</option>
            <option className="font-semibold" value="asia">Asia</option>
            <option className="font-semibold" value="europe">Europe</option>
            <option className="font-semibold" value="oceania">Oceania</option>
        </select>
    )
}