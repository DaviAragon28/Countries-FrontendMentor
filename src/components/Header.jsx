import { useContext } from 'react'
import { RiMoonLine, RiSunFill } from 'react-icons/ri'
import { AppContext } from '../context/AppContext'

export function Header() {
    const { handleDarkMode, darkMode } = useContext(AppContext)

    return (
        <header className={` transition-colors ${darkMode ? 'bg-darkModeElements text-white' : 'bg-white'} `}>
            <nav>
                <ul className={"flex justify-between px-4 py-7 shadow-lg items-center lg:px-10 xl:px-28"}>
                    <li className="text-lg font-extrabold">Where in the world?</li>
                    <li onClick={handleDarkMode} className="font-semibold flex gap-2 items-center cursor-pointer">
                        {
                            darkMode 
                                ? <RiSunFill size={24} color='orange' />
                                : <RiMoonLine size={24} />
                            
                        }
                        <p>
                            {
                                darkMode
                                    ? 'Light Mode'
                                    : 'Dark Mode'
                            }
                        </p>
                    </li>
                </ul>
            </nav>
        </header>
    )
}