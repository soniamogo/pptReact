import React from 'react'
import './style.css'

const Boton = ({content, handleNext, handlePrev, jugador}) => {
  const handleClick = () =>{
    if(content==='>' && jugador ==='1') handleNext(1)
    if (content==='<'&& jugador === '1') handlePrev(1)
  } 
  return (
    <div id='boton' onClick={handleClick}>{content}</div>
  )
}

export default Boton