import { useState, useEffect } from "react";

export function useGetCountries(region = 'all') {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (region === 'all') {
            const getData = () => {
                setLoading(true)
                setTimeout(() => {
                    fetch(`https://restcountries.com/v3.1/${region}`)
                        .then(res => res.json())
                        .then(data => {
                            setLoading(false)
                            setCountries(data)
                        })
                }, 300)

            }
            getData()
        } else {
            const getData = () => {
                setLoading(true)
                setTimeout(() => {

                    fetch(`https://restcountries.com/v3.1/region/${region}`)
                        .then(res => res.json())
                        .then(data => {
                            setLoading(false)
                            setCountries(data)
                        })
                }, 300)
            }
            getData()
        }

    }, [region])


    return { countries, loading }
}