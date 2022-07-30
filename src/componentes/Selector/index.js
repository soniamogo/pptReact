import React from 'react'
import Piedra from '../../img/piedra.png'
import Papel from '../../img/papel.png'
import Tijera from '../../img/tijera.png'
import Boton from '../Boton'
import './style.css'


const Selector = ({handleNext, handlePrev, jugador, seleccion}) => {
  return (
    <div id='jugador'>
      <img src={Piedra}/>
      <div id="botones">
        <Boton content='<' handlePrev={handlePrev} jugador={jugador}/>
        <div id='opcion'>{seleccion}</div>
        <Boton content='>' handleNext={handleNext} jugador={jugador}/>
      </div>
    </div>
    
   
  )
}

export default Selector