import React from 'react'
import Piedra from '../../img/piedra.png'
import Papel from '../../img/papel.png'
import Tijera from '../../img/tijera.png'
import Boton from '../Boton'
import './style.css'


const Selector = ({handleNext, handlePrev}) => {
  return (
    <div id='jugador'>
      <img src={Piedra}/>
      <div id="botones">
        <Boton content='<' handlePrev={handlePrev} jugador='1'/>
        <div id='opcion'>Prueba</div>
        <Boton content='>' handleNext={handleNext} jugador='1'/>
      </div>
    </div>
    
   
  )
}

export default Selector