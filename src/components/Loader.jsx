import { useContext } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { AppContext } from '../context/AppContext'

export function Loader({ margin }) {

    const { darkMode } = useContext(AppContext)


    return (
        <div className={`grid place-content-center ${margin && 'mt-40'}  absolute left-0 right-0 mx-auto`}>
            <TailSpin
                height="80"
                width="80"
                color={darkMode ? '#fff' : '#0088ff'}
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}
