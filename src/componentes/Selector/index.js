import React from 'react'
import Piedra from '../../img/piedra.png'
import Papel from '../../img/papel.png'
import Tijera from '../../img/tijera.png'
import Boton from '../Boton'
import './style.css'



const Selector = ({handleNext, handlePrev, jugador, seleccion, ganadas}) => {
  let nextOption = () =>{
    handleNext(jugador)
  }

  let prevOption = () =>{
    handlePrev(jugador)
  }

  return (
    <div id='jugador'>
      {seleccion === 'Piedra' && <img src={Piedra}/>}
      {seleccion === 'Papel' && <img src={Papel}/>}
      {seleccion === 'Tijera' && <img src={Tijera}/>}
      <div id="botones">
        <Boton content='<' handleClick={prevOption}/>
        <div id='opcion'> {seleccion}</div>
        <Boton content='>' handleClick={nextOption}/>
      </div>
      <div id='ganadas'>{ganadas}</div>
    </div>
    
   
  )
}

export default Selector