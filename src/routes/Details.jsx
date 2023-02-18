import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BackButton } from "../components/BackButton";
import { Loader } from "../components/Loader";
import { AppContext } from '../context/AppContext'
import { useGetCountries } from "../hooks/useGetCountries";

export function Details() {
    const { darkMode, region,  } = useContext(AppContext)
    const { countries, loading } = useGetCountries()
    const { name } = useParams()
    const result = countries.find(item => item.name.common === name)
    const intl = new Intl.NumberFormat('es-MX').format(result?.population);
    let languages
    let currencies
    let nativeName
    if (result) {
        languages = Object.values(result.languages)
        currencies = Object.values(result.currencies)
        nativeName = Object.values(result.name.nativeName)
    }

    return (
        <main className={`p-5 flex flex-col  gap-10 transition-colors ${darkMode ? 'bg-darkModeBackground' : 'bg-lightModeBackground '} ${loading && 'h-screen'} ${!loading && !result ? 'h-screen' : 'h-full'}   lg:h-screen lg:px-10 xl:px-28 lg:py-16  `}>
            <BackButton />
            {
                result
                    ? (
                        <section className={`flex  flex-col gap-10 ${darkMode ? 'text-white' : 'text-lightModeText'} lg:flex-row lg:gap-12  xl:gap-24 ` }>

                            <img className="h-72 xl:h-96 lg:w-[390px] xl:w-[500px] object-cover" src={result?.flags.svg} alt={result?.flags.alt} />
                            <div className="flex flex-col gap-10 lg:pt-2">

                                <h2 className="font-bold text-2xl">{result?.name.common}</h2>
                                <div className="flex flex-col lg:flex-row lg:gap-5 xl:gap-20">


                                    <div className="flex flex-col gap-2">
                                        <p  className="flex gap-2 w-64 truncate"><span className="font-bold">Native Name:</span>{nativeName[0]?.official}</p>
                                        <p className="flex gap-2"><span className="font-bold">Population:</span>{intl}</p>
                                        <p className="flex gap-2"><span className="font-bold">Region:</span>{result?.region}</p>
                                        <p className="flex gap-2"><span className="font-bold">Sub Region:</span>{result?.subregion}</p>
                                        <p className="flex gap-2"><span className="font-bold">Capital:</span>{result?.capital[0]}</p>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <p className="flex gap-2"><span className="font-bold">Top Level Domain:</span>{result?.tld[0]}</p>
                                        <p className="flex gap-2">
                                            <span className="font-bold">Currencies:</span>
                                            <span>{currencies[0].name}</span>
                                            
                                        </p>
                                        <p className="flex gap-1 flex-wrap">
                                            <span className="font-bold">Languages:</span>
                                            {
                                                languages.map(lang => (
                                                    <span className="after:content-['_-_'] last:after:content-['']" key={lang}>{lang}</span>
                                                ))
                                            }

                                        </p>
                                        <p className=" font-bold flex gap-2">
                                            Map:
                                        <a target='_blank' className="font-normal underline text-blue-400 w-max" href={result.maps.googleMaps}>Watch Map</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="font-bold">Border Countries:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {
                                            result?.borders?.map(bor => (
                                                <span key={bor} className={` shadow-md w-12 text-center py-1 rounded-md ${darkMode ? 'bg-darkModeElements' : 'bg-white'}`}>{bor}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>

                        </section>
                    )
                    : (
                        <Loader margin />
                    )
            }
        </main>
    )
}