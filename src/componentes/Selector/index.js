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
        <Boton content='<' handleclick={handlePrev} jugador={jugador}/>
        <div id='opcion' onChange={seleccion}></div>
        <Boton content='>' handleClick={handleNext} jugador={jugador}/>
      </div>
    </div>
    
   
  )
}

export default Selector