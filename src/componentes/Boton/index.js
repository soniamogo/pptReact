import React from 'react'
import './style.css'

const Boton = ({content, jugador, handleClick}) => {
  // const handleClick = () =>{
  //   handleNext(jugador)
  //   handlePrev(jugador)
  // } 
  return (
    <div id='boton' onClick={handleClick}>{content}</div>
  )
}

export default Boton