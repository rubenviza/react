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
                ...this.state.form,    // Expande todo lo que se tenia anteriormente 
                [e.target.name]: e.target.value    // Y si es una key nueva, la registra, sino se actualiza la que habia
            }            
        })
    }
          
    handleSubmit = async (e) => {
        e.preventDefault()   // para evitar que haga reload a la pagina
       // console.log (this.state)
       try {
            let config = {        // para usar POST se necesita enviar objeto de configuracion
                method: 'POST',
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            let res = await fetch('http://localhost:8000/api/exercises', config)
            let json = await res.json()  // Nos indica la respuesta json del servidor 
            console.log (json)

       } catch (error){

       }
    } 

    render (){
        return (            
            <div className='row'>
                <div className='col-sm'>
                    <Card {...this.state.form}/>    {/* Expande contenido del estado form */}
                </div>
                <div className='col-sm'>
                    <ExerciseForm 
                        onCambio = {this.handleChange}
                        onSubmit = {this.handleSubmit}
                        form = {this.state.form}
                    />
                </div>                
            </div>          
        )
    }
}
export default ExerciseNew