import React from 'react'
import Welcome from '../components/Welcome'
import ProfilePic from '../images/profile-pic.jpg'
import ExerciseList from '../components/ExerciseList'
import BtnPlus from '../components/BtnPlus'
import Loading from '../components/Loading'
import FatalError from './500'
import ExampleHooks from '../components/ExampleHooks'
import useFetch from '../hooks/useFetch'
import urlAPI from '../config'

const ExercisesHook = () => {

    const user = {
        username: 'rpalacios12',
        firstName: 'Raul',
        lastName: 'Palacios',
        avatar: 'https://cdn2.iconfinder.com/data/icons/avatar-profile/431/avatar_contact_tie_user_default_suit_display-128.png',
        avatar2: ProfilePic
    }

    // Con hook personalizado 'useFetch' 
    const { data, cargando, errorX } = useFetch(`${urlAPI}/exercises`);

 /* // Sin hook personalizado
    const [ data, setData ] = useState([])
    const [ cargando, setCargando ] = useState(true)    
    const [ errorX, setErrorX ] = useState(null)

    const fetchExercises = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/exercises')
            let dataRec = await res.json()
            setData(dataRec)
            setCargando(false)
        } catch (error){
            setCargando(false)
            setErrorX(error)
        }
    }
    useEffect( () => {       
        fetchExercises()
    }, [])   // Se coloca [] si queremos que se ejecute solo una vez. Se puede indicar alguna/s prop o state, asi cada vez que cambien, se ejecutara el useEffect
*/

    if (cargando)
        return <Loading />
    if (errorX)
        return <FatalError />
    return (
        <div className='container'>
            <ExampleHooks />
            <Welcome
                userX={user}
            />
            <ExerciseList
                theexercises={data}
            />
            <BtnPlus />
        </div>
    )
}
export default ExercisesHook
