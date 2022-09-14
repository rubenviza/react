import React from 'react'
import Card from './Card'
import './styles/Card.css'
import exerciseImg from '../images/exercise2.png'

function ExerciseList (props){
    return (
        <div>
            { props.exercises.map((exercise) =>{
                    return (  
                        <Card 
                            key={exercise.id}         // para corregir Warning que obliga a tener una prop "key" con valor unico
                            title={exercise.title}
                            description={exercise.description}
                            img={exercise.img}         // img={exerciseImg} 
                            leftColor={exercise.leftColor}
                            rightColor={exercise.rightColor}
                        />
                    )
            })}
        </div> 
    )
}

export default ExerciseList