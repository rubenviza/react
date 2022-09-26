
// Pagina (componente que contiene otros componentes)

import React from 'react'
import Welcome from '../components/Welcome'
import ProfilePic from '../images/profile-pic.jpg'
import ExerciseList from '../components/ExerciseList'
import BtnPlus from '../components/BtnPlus'
import Loading from '../components/Loading'
import FatalError from './500'
import ExampleHooks from '../components/ExampleHooks'
import urlAPI from '../config'

class Exercises extends React.Component {
    
    // Se pueden utilizar los estados (state) fuera del constructor, como esta variable user
    user = {
        username: 'rpalacios12',
        firstName: 'Raul',
        lastName: 'Palacios',
        avatar: 'https://cdn2.iconfinder.com/data/icons/avatar-profile/431/avatar_contact_tie_user_default_suit_display-128.png',
        avatar2: ProfilePic
    }

   state = {
        data:[],
        cargando: true,
        error: null
    }

    async componentDidMount() {       // async convierte la funcion en sincrona
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        try {
            let res = await fetch(`${urlAPI}/exercises`)
            let data = await res.json()
            this.setState({
                data, 
                cargando: false
            })
            //console.log(data);
        } catch (error){
            this.setState({
                cargando: false,
                error        // cuando ambas variables tienen el mismo nombre, javascript asume xx:xx (ej. error: error)
            })
        }
    }

    render(){
        if (this.state.cargando)
            return <Loading />
        if (this.state.error)
            return <FatalError />
        return (
            <div className='container'>
                <ExampleHooks />
                <Welcome
                    userX={this.user}
                />
               <ExerciseList
                    theexercises={this.state.data}
               />
               <BtnPlus />
            </div>
        )}
}

export default Exercises