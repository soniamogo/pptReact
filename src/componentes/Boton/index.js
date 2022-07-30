import React from 'react'
import './style.css'

const Boton = ({content, handleNext, handlePrev, jugador, jugada}) => {
  const handleClick = () =>{
    if(content==='>') handleNext(jugador)
    if(content==='<') handlePrev(jugador)
    if(content==='Jugar') jugada()
  } 
  return (
    <div id='boton' onClick={handleClick}>{content}</div>
  )
}

export default Boton