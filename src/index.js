// const element = document.createElement('h1')
// element.innerText = 'Hello React !!'
// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'

const container = document.getElementById('root')

//ReactDOM.render(__QUE__, __DONDE__)
//ReactDOM.render(<App />, container)  // version react antigua
const root = ReactDOM.createRoot(container)
root.render(<App />) 

