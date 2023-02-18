import { useContext } from 'react'
import data from '../../data.json'
import { Card } from '../components/Card'
import { Loader } from '../components/Loader'
import { AppContext } from '../context/AppContext'
import { useGetCountries } from '../hooks/useGetCountries'

export function Cards() {
    const { inputValue, region, darkMode } = useContext(AppContext)
    const { countries, loading } = useGetCountries(region)

    console.log(loading)
    let searchedCountries = []

    if (!inputValue.length >= 1) {
        searchedCountries = countries
    } else {
        searchedCountries = countries.filter(country => {
            const text = country.name.common.toLowerCase();
            const value = inputValue.toLowerCase()
            return text.includes(value)
        })
    }
    return (
        <div className={`${loading ?  'h-screen' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12'} ${!loading && searchedCountries.length < 5 ? 'h-screen' : 'place-items-center'} `}>

            {
                loading
                    ? (
                        <Loader />
                    )
                    : (
                        <>
                            {
                                searchedCountries.map(country => (
                                    <Card key={country.name.common} country={country} />
                                ))
                            }
                        </>
                    )
            }

            {
                !loading && searchedCountries.length < 1
                && (
                    <h3 className={`font-bold absolute left-0 right-0 text-center ${darkMode && 'text-white'}`} >No results</h3>
                )
            }

        </div>
    )
}