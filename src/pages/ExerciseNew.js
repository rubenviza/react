import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'

class ExerciseNew extends React.Component {

    state = {
        form: {
       //     llave: '',
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    }
    handleChange = (e) => {  // e es el evento
        //console.log(`${e.target.name}: ${e.target.value}`)

     /* let partialState = {}
        partialState[e.target.name] = e.target.value
        this.setState(partialState)
     */
        // forma compacta de lo de arriba
     /*  this.setState ({  [e.target.name]: e.target.value  })  */

        this.setState ({
            form: {
                ...this.state.form,    // Mantiene todo lo que se tenia anteriormente 
                [e.target.name]: e.target.value    // Y si es una key nueva, la registra, sino se actualiza la que habia
            }            
        })
    }

    render (){
        return (            
            <div className='row'>
                <div className='col-sm'>
                    <Card {...this.state.form}/>    {/* Todo el estado form */}
                </div>
                <div className='col-sm'>
                    <ExerciseForm 
                        onCambio = {this.handleChange}
                        form = {this.state.form}
                    />
                </div>                
            </div>          
        )
    }
}
export default ExerciseNew