import { useContext } from "react";
import { Main } from "../containers/Main";
import { AppContext } from '../context/AppContext'
import { useGetCountries } from "../hooks/useGetCountries";


export function Home() {
    const { darkMode, region } = useContext(AppContext)
    const { countries } = useGetCountries(region)

    return (
        <div className={` transition-colors ${darkMode ? 'bg-darkModeBackground' : 'bg-lightModeBackground '}  ${countries.length > 0 ? 'h-full' : 'h-screen'} `}>
            <Main />
        </div>
    )
}