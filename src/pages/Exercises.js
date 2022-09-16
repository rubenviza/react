
// Pagina (componente que contiene otros componentes)

import React from 'react'
import Welcome from '../components/Welcome'
import ProfilePic from '../images/profile-pic.jpg'
import ExerciseList from '../components/ExerciseList'
import BtnPlus from '../components/BtnPlus'

class Exercises extends React.Component {
    
    // Se pueden utilizar los estados (state) fuera del constructor, como esta variable user
    user = {
        username: 'rpalacios12',
        firstName: 'Raul',
        lastName: 'Palacios',
        avatar: 'https://cdn2.iconfinder.com/data/icons/avatar-profile/431/avatar_contact_tie_user_default_suit_display-128.png',
        avatar2: ProfilePic
    }

    constructor(props){
        super(props)
        this.state = {
            data:[{
                "id": 1,
                "title": "Technique Guides",
                "description": "Learn amazing street workout and calisthenics",
                "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
                "leftColor": "#A74CF2",
                "rightColor": "#617BFB"
            },{
                "id": 2,
                "title": "Skills Training",
                "description": "Learn the secrets of bodyweight techniques",
                "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercises02.png?alt=media&token=a5d55381-5f3e-4f25-92dd-560775f96aa2",
                "leftColor": "#17EAD9",
                "rightColor": "#6078EA"
            },{
                "id": 3,
                "title": "Strength Training",
                "description": "Train anytime, everywere and become a superhero!",
                "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise03.png?alt=media&token=8e5301c0-151e-415d-bd2c-655235d9c916",
                "leftColor": "#FAD961",
                "rightColor": "#F76B1C"
            }]
        }
    }

    render(){
        return (
            <div>
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