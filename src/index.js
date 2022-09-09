// const element = document.createElement('h1')
// element.innerText = 'Hello React !!'
// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
  firstName: 'Raul',
  lastName: 'Palacios',
  avatar: 'https://koms.korloy.com/resource/lib/ace-admin/assets/avatars/profile-pic.jpg'
}

function getName (user){
  return `${user.firstName} ${user.lastName}`
}

function getGreeting (user){
  if(user){
    return <h1>Hola {getName(user)}</h1>
  }
  return <h1>Hola extraño</h1>
}

const name = 'Roberto'
const element = ( <>
            <h1>Hola {name}</h1>
            <h1>Hola {getName(user)}</h1>
            <div>{getGreeting(user)}</div>
            <img src={user.avatar} />
            </>
)
const container = document.getElementById('root')

// ReactDOM.render(__QUE__, __DONDE__)
ReactDOM.render(element, container)