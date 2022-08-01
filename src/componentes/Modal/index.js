import React from 'react';
import './style.css';

const Modal = ({ganador, handleReset}) => {
  return (
    <div id="modal">
        {ganador==='empate' && `El resultado es empate`}
        {ganador!=='empate' && `El ganador es el ${ganador}`}
        <div id="reset" onClick={handleReset} >Reset</div>
    </div>
  )
}

export default Modal