
// Componente funcional

import React from "react"
import './styles/Welcome.css'

function Welcome (props){
    let matricula = "Matricula activa";

    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <h3>Hello {props.userX.username}</h3>
                <p>{matricula}. Nombre completo: {getName(props.userX)}</p>
                <div>{getGreeting(props.userX)}</div>
                <img src={props.userX.avatar2} />           {/* <img src={userX.avatar} /> */}
                <p>Let's work out to get someone gains!</p>
            </div>    
        </div>
    )
}

function getName (user){
    return `${user.firstName} ${user.lastName}`
}

function getGreeting (user){
   if(user){
       return <p>Hola {getName(user)}</p>
   }
   return <p>Hola extraño</p>
}

export default Welcome
