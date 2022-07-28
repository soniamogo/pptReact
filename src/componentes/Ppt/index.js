import React, { Component } from 'react' 
import './style.css'
import Selector from '../Selector'

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
      var indice = this.opciones.indexOf(this.state.seleccion1)
      if(indice === 2) indice=0;
      else indice++
      this.setState({seleccion1:this.opciones[indice]})
      console.log(this.state.seleccion1)
    }else{
      var indice = this.opciones.indexOf(this.state.seleccion2)
      if(indice === 2) indice=0;
      else indice++
      this.setState({seleccion2:this.opciones[indice]})
    }
  }

  handlePrev = (jugador) =>{
    if(jugador === 1){
      var indice = this.opciones.indexOf(this.state.seleccion1)
      if(indice === 0) indice=2;
      else indice--
      this.setState({seleccion1:this.opciones[indice]})
      console.log(this.state.seleccion1)
    }else{
      var indice = this.opciones.indexOf(this.state.seleccion2)
      if(indice === 0) indice=2;
      else indice--
      this.setState({seleccion2:this.opciones[indice]})
    }
  }

  render() {
    return (
      <div id='tablero'>
        <div id='jugadas'>
            <Selector handleNext={this.handleNext} handlePrev={this.handlePrev}/>
        </div>
      </div>
    )
  }
}
