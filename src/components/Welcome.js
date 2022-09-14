
// Function component

import React from "react"
import './styles/Welcome.css'
import ProfilePic from '../images/profile-pic.jpg'

function Welcome ({userX}){
    let matricula = "Matricula activa";

    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {userX.username}</h1>
                <p>{matricula}</p>
                <p>Nombre completo: {getName(userX)}</p>
                <div>{getGreeting(userX)}</div>
                <img src={ProfilePic} />           {/* <img src={userX.avatar} /> */}
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
