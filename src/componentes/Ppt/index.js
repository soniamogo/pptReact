import React, { Component } from 'react' 
import './style.css'
import Selector from '../Selector'
import Jugar from '../Jugar'

export default class Ppt extends Component {
  constructor(props) {
    super(props)
    this.opciones = ['piedra', 'papel', 'tijera']
    this.state = {
       seleccion1: 'piedra',
       seleccion2: 'papel'
    }
  }

  handleNext = (jugador) =>{
    if(jugador === 1){
      console.log(this.state.seleccion1)
      var indice = this.opciones.indexOf(this.state.seleccion1)
      console.log(indice)
      if(indice === 2) indice=0;
      else indice++
      this.setState({seleccion1:this.opciones[indice]})
      console.log(this.state.seleccion1)
    }else{
      console.log(this.state.seleccion2)
      var indice = this.opciones.indexOf(this.state.seleccion2)
      console.log(indice)
      if(indice === 2) indice=0;
      else indice++
      this.setState({seleccion2:this.opciones[indice]})
      console.log(this.state.seleccion2)
    }
  }

  handlePrev = (jugador) =>{
    if(jugador === 1){
      console.log(this.state.seleccion1)
      var indice = this.opciones.indexOf(this.state.seleccion1)
      console.log(indice)
      if(indice === 0) indice=2;
      else indice--
      this.setState({seleccion1:this.opciones[indice]})
      console.log(this.state.seleccion1)
    }else{
      console.log(this.state.seleccion2)
      var indice = this.opciones.indexOf(this.state.seleccion2)
      console.log(indice)
      if(indice === 0) indice=2;
      else indice--
      this.setState({seleccion2:this.opciones[indice]})
      console.log(this.state.seleccion2)
    }
  }

  jugada = () =>{
    var ganador = ''
    if(this.state.seleccion1 === 'tijera' && this.state.seleccion2 === 'papel' ||
       this.state.seleccion1 === 'piedra' && this.state.seleccion2 === 'tijera' ||
       this.state.seleccion1 === 'papel' && this.state.seleccion2 === 'piedra'){
        ganador = 'Jugador 1';
    }else if (this.state.seleccion2 === 'tijera' && this.state.seleccion1 === 'papel' ||
              this.state.seleccion2 === 'piedra' && this.state.seleccion1 === 'tijera' ||
              this.state.seleccion2 === 'papel' && this.state.seleccion1 === 'piedra'){
                ganador = 'Jugador 2';
              }else{
                ganador = 'Empate'
              }
              console.log(ganador)
  }

  render() {
    return (
      <div id='tablero'>
        <div id='jugadas'>
            <Selector handleNext={this.handleNext} handlePrev={this.handlePrev} jugador='1' seleccion={this.state.seleccion1}/>
            <Jugar jugada={this.jugada}/>
            <Selector handleNext={this.handleNext} handlePrev={this.handlePrev} jugador='2' seleccion={this.state.seleccion2}/>
        </div>
      </div>
    )
  }
}
