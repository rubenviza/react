import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [ data, setData ] = useState([])
    const [ cargando, setCargando ] = useState(true)    
    const [ errorX, setErrorX ] = useState(null)

    useEffect( () => {  
        const fetchResourse = async () => {
            try {
                let res = await fetch(url)
                let dataRec = await res.json()
                setData(dataRec)
                setCargando(false)
            } catch (error){
                setCargando(false)
                setErrorX(error)
            }
        }   
        fetchResourse()
    }, [url] )   // se pasa parametro a useEffect
    
    return { data, cargando, errorX }
}
export default useFetch