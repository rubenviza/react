import React, { useState, useEffect } from 'react'

/*
class ExampleHooks extends React.Component {
    state = {
        count:0
    }
    render () {
        return (
            <div>
            <p>You clicked {this.state.count} times</p>
            <button onClick={() => this.setState({count: this.state.count + 1})}>
                Click me
            </button>
          </div>
        )
    }
}
export default ExampleHooks
*/

// Con Hooks (se usan componentes funcionales)
const ExampleHooks = () => {
    const [contador, setContador] = useState(0)   // useState para usar Hooks

    const asignaConHooks = () => setContador(contador + 1)

     // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${contador} times`;
    })

    return (
        <div>
            <p>Testing Hooks. You clicked {contador} times&nbsp;
            {/* <button onClick={() => setContador(contador + 1)}> */}
            <button onClick={asignaConHooks}>
                Click me
            </button>
            </p>
          </div>
    )
}
export default ExampleHooks