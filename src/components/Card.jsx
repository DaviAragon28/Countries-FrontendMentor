import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

export function Card({ country }) {
    const { darkMode, setInputValue } = useContext(AppContext)
    const intl = new Intl.NumberFormat('es-MX').format(country.population);


    return (
        <Link className='w-72' onClick={() => setInputValue('')} to={`/${country.name.common}`}>
            <div className={`shadow-md rounded-md overflow-hidden  ${darkMode ? 'bg-darkModeElements text-white' : 'bg-white'}`}>
                <div className='w-full h-48 '>
                    <img className='h-full w-full object-cover' src={country.flags.svg} alt={country.name.common} />
                </div>
                <div className='px-3 pb-4 pt-6 flex flex-col gap-3'>
                    <h2 className='font-bold text-xl w-36 truncate'>{country.name.common}</h2>
                    <p className='flex gap-2'><span className='font-semibold'>Population:</span>{intl}</p>
                    <p className='flex gap-2'><span className='font-semibold'>Region:</span>{country.region}</p>
                    <p className='flex gap-2'>
                        <span className='font-semibold'>Capital:</span>
                        {
                            country.capital &&
                            <span>
                                {country.capital[0]}
                            </span>
                        }
                    </p>
                </div>
            </div>
        </Link>
    )
}
