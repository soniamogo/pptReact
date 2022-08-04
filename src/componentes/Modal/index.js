import React from 'react'
import './style.css'

const Modal = ({ganador, handleReset}) => {
    if (ganador!==''){
        return (
            <div id="modal">
                {ganador!='Empate' && `El ganador es ${ganador}`}
                {ganador==='Empate' && 'Empate'}   
                <div id='reset' onClick={handleReset}> Reset </div>         
            </div>
            
        )
    }else {
        return null
    }
}

export default Modal