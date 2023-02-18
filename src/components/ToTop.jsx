import { useContext } from 'react'
import { RiArrowUpLine } from 'react-icons/ri'
import { AppContext } from '../context/AppContext'
import { useToTop } from '../hooks/useToTop'

export function ToTop() {
    const { showButton } = useToTop()
    const { darkMode } = useContext(AppContext) 
    const handleToTop = () => {
        window.scrollTo(0, 0)
    }
    return (
        <button onClick={handleToTop} className={`fixed  w-min px-2 py-2 rounded-full shadow-xl right-0 bottom-5 transition-transform  ${showButton ? '-translate-x-5' : 'translate-x-10'}  ${darkMode ? 'text-lightModeText bg-white' : 'bg-darkModeElements text-white'}`}><RiArrowUpLine size={20} /></button>
    )
}