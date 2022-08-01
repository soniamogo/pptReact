import React from 'react'
import './style.css'

const Modal = ({ganador}) => {
    if (ganador!==''){
        return (
            <div id="modal">
                {ganador!='empate' && 'El ganador es '}
                {ganador==='empate' && 'Empate'}            
            </div>
        )
    }else {
        return null
    }
}

export default Modal