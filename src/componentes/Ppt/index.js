import React, { Component } from 'react' 
import './style.css'
import JugadorIzquierda from '../JugadorIzquierda'
import JugadorDerecha from '../JugadorDerecha'

export default class Ppt extends Component {
  render() {
    return (
      <div id='tablero'>
        <div id='jugadas'>
            <JugadorIzquierda />
            <JugadorDerecha />
        </div>
      </div>
    )
  }
}
