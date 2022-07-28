import React from 'react'
import './style.css'

const Boton = ({content, handleNext, handlePrev}) => {
  const handleClick = () =>{
    if(content==='>') handleNext(1)
    if (content==='<') handlePrev(1)
  } 
  return (
    <div id='boton' onClick={handleClick}>{content}</div>
  )
}

export default Boton