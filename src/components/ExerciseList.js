import React from 'react'
import Card from './Card'
import './styles/Card.css'
import exerciseImg from '../images/exercise2.png'

/*
// Tambien es posible usar "arrow function" de js y destructurar props a solo theexercises
const ExerciseList = ({theexercises}) => (
    <div>
    { theexercises.map((exercise) =>{ ....
)
*/

function ExerciseList (props){
    return (
        <div>
            { props.theexercises.map((exercise) =>{
                    return (  
                        <Card 
                            key={exercise.id}        // para corregir Warning que obliga a tener una prop "key" con valor unico
                            llave={exercise.id}      // no se puede acceder a prop "key" (en componente que renderizará (Card)) por eso se envía otro con otro nombre
                            
                            /*title={exercise.title}
                            description={exercise.description}
                            img={exercise.img}         // img={exerciseImg} 
                            leftColor={exercise.leftColor}
                            rightColor={exercise.rightColor}
                            */

                            // forma compacta para enviar todos los parametros de elementos en theexercises
                            {...exercise}
                        />
                    )
            })}
        </div> 
    )
}

export default ExerciseList