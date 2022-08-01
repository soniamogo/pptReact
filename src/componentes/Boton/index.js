import React from 'react'
import './style.css'

const Boton = ({content, handleClick}) => {
  
  return (
    <div id={content!=='Jugar' ? 'pequeño' : null} className='boton' onClick={handleClick}>{content}</div>
  )
}

export default Boton