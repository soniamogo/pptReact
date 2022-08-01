import React from 'react'
import Piedra from '../../img/piedra.png'
import Papel from '../../img/papel.png'
import Tijera from '../../img/tijera.png'
import Boton from '../Boton'
import './style.css'



const Selector = ({handleNext, handlePrev, jugador, seleccion}) => {
  let nextOption = () =>{
    handleNext(jugador)
  }

  let prevOption = () =>{
    handlePrev(jugador)
  }

  return (
    <div id='jugador'>
      {seleccion === 'piedra' && <img src={Piedra}/>}
      {seleccion === 'papel' && <img src={Papel}/>}
      {seleccion === 'tijera' && <img src={Tijera}/>}
      <div id="botones">
        <Boton content='<' handleClick={prevOption}/>
        <div id='opcion'> {seleccion}</div>
        <Boton content='>' handleClick={nextOption}/>
      </div>
    </div>
    
   
  )
}

export default Selector