import React from 'react'

class TestEvent extends React.Component {

    /*
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick (){
        console.log(this.props)
    } */
    // Forma compacta de lo de arriba (para poder acceder a props) 
    handleClick = () => {
        //console.log(this.props) 
    }

    render (){
        return (
            <button onClick={this.handleClick}>
                Send
            </button>
        )
    }
}

export default TestEvent