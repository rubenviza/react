// const element = document.createElement('h1')
// element.innerText = 'Hello React !!'
// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

import Card from './components/Card'
import Welcome from './components/Welcome'

import 'bootstrap/dist/css/bootstrap.css'
import exerciseImg from './images/exercise2.png'

const container = document.getElementById('root')

const user = {
    username: 'rpalacios12',
    firstName: 'Raul',
    lastName: 'Palacios',
    avatar: 'https://koms.korloy.com/resource/lib/ace-admin/assets/avatars/profile-pic.jpg'
}

//ReactDOM.render(__QUE__, __DONDE__)
ReactDOM.render(<div>
                <Welcome
                    userX={user}
                />
                <Card 
                    title="Technique Guides"
                    description="Learn amazing street workout and calisthenics"
                    img={exerciseImg}
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                />
                </div>, container)
