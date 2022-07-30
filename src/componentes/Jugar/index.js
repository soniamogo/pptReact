import React from 'react'
import Boton from '../Boton'
import './style.css'

const Jugar = ({jugada}) => {
  return (
    <div id='jugar'>
        <Boton handleClick={jugada} content='Jugar'/>
    </div>
  )
}

export default Jugar