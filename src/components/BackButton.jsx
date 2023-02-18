import { useContext } from 'react'
import { RiArrowLeftLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

export function BackButton() {
    const { darkMode } = useContext(AppContext)
    const navigate = useNavigate('')
    return (
        <button onClick={() => navigate(-1)} className={`flex items-center gap-2 font-semibold px-3 py-2 shadow-md rounded-md transition-colors w-min ${darkMode ? 'bg-darkModeElements text-white' : 'bg-white'}`}>
            <RiArrowLeftLine size={24} />
            Back
        </button>
    )
}