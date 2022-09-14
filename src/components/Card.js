
// Componente de clase

import React from 'react'
import exerciseImg from '../images/exercise2.png'
import circlesImg from '../images/circles.png'

class Card extends React.Component {
    
    constructor(props){     // Opcional. Para iniciar estados
        super(props)
        this.state = {  // los estados siempre definirlos en el constructor.
           figura: 'https://gcdn.thunderstore.io/live/repository/icons/Smoothbrain-Starvation-1.0.0.png.128x128_q95.png'         
           // figura: exerciseImg
        }
    }

    componentDidMount(){        // Opcional. Se ejecuta despues de montar el componente. Aqui llamar a APIs, suscribir eventos, modificar estados.
        // ejemplo para modificar un estado.
        setTimeout(() => {       
            this.setState({
                figura: this.props.img     // los estados a diferencia de las props son modificables.
            })
        }, 5000);
    }

    render (){    // dentro de render() no se deben modificar los estados.
        const { id, title:titulo, description, img, leftColor, rightColor } = this.props  
      
        return (
            <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage:`url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
               <div className="card-body">
                  <div className="row center">
                     <div className="col-6">
                        <img src={this.state.figura} className="float-right" />       {/* <img src={img} .... */}        
                     </div>
                     <div className="col-6 Fitness-Card-Info">
                        <h1>{titulo}</h1>
                         <p>{description}</p>
                     </div>
                 </div>   
              </div>
           </div> 
        )
    }
}

export default Card