import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import Loading from '../components/Loading'
import withNavigateHook from '../components/withNavigateHook'
import FatalError from './500'
import urlAPI from '../config'

class ExerciseNew extends React.Component {

    state = {
        form: {
       //     llave: '',
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        loading: false,
        error: null
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
        this.setState({
            loading: true
        })
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
            let res = await fetch(`${urlAPI}/exercises`, config) 
            let json = await res.json()  // Nos indica la respuesta json del servidor 
            console.log (json) 
            this.setState({
                loading: false
            })            
            this.props.navigation('/react')   // para redireccionar a pagina '/react'

       } catch (error){
            this.setState({
                loading: false,
                error
            })
       }
    } 

    render (){
        if (this.state.loading)
            return <Loading />            
        if (this.state.error)
            return <FatalError />
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
export default withNavigateHook(ExerciseNew)   // para redireccionar