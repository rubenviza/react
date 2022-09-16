import React from 'react'
import PlusImg from '../images/plus.png'
import { Link } from 'react-router-dom'
import './styles/BtnPlus.css'

// con "arrow function" de js 
const BtnPlus = () => (
    <div className='container-fa mx-auto' >
        <Link to="/react/new"> 
            <img src={PlusImg} alt="exercise" className='Fitness-Add' />
        </Link>
    </div>
)

/*
// componente funcional con funcion
function BtnPlus () {
    return (
        <Link to="/exercise/new">
            <img src={PlusImg} className='Fitness-Add' alt="exercise"/>          
        </Link>
    )
}
*/
export default BtnPlus