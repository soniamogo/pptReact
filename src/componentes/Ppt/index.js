import React, { Component } from 'react' 
import './style.css'
import Selector from '../Selector'
import Jugar from '../Jugar'
import Modal from '../Modal'

export default class Ppt extends Component {
  constructor(props) {
    super(props)
    this.opciones = ['Piedra', 'Papel', 'Tijera']
    this.state = {
       seleccion1: 'Piedra',
       seleccion2: 'Papel',
       ganadas1:0,
       ganadas2:0,
       ganador: ''
    }
  }

  handleNext = (jugador) =>{
    if(jugador === 1){
      var indice = this.opciones.indexOf(this.state.seleccion1)
      if(indice === 2) indice=0;
      else indice++
      this.setState({seleccion1:this.opciones[indice]})
    }else{
      var indice = this.opciones.indexOf(this.state.seleccion2)
      if(indice === 2) indice=0;
      else indice++
      this.setState({seleccion2:this.opciones[indice]})
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
    }
    else{
      console.log(this.state.seleccion2)
      var indice = this.opciones.indexOf(this.state.seleccion2)
      console.log(indice)
      if(indice === 0) indice=2;
      else indice--
      this.setState({seleccion2:this.opciones[indice]})
      
    }
    
  }

  jugada = () =>{
    var ganador = ''
    var {ganadas1, ganadas2} = this.state
    if(this.state.seleccion1 === 'Tijera' && this.state.seleccion2 === 'Papel' ||
       this.state.seleccion1 === 'Piedra' && this.state.seleccion2 === 'Tijera' ||
       this.state.seleccion1 === 'Papel' && this.state.seleccion2 === 'Piedra'){
        ganador = 'Jugador 1';
        ganadas1++
    }else if (this.state.seleccion2 === 'Tijera' && this.state.seleccion1 === 'Papel' ||
              this.state.seleccion2 === 'Piedra' && this.state.seleccion1 === 'Tijera' ||
              this.state.seleccion2 === 'Papel' && this.state.seleccion1 === 'Piedra'){
                ganador = 'Jugador 2';
                ganadas2++
              }else{
                ganador = 'Empate'
              }
              this.setState({ganador, ganadas1, ganadas2})
  }
  handleReset = () =>{
    this.setState({seleccion1:'Piedra', seleccion2:'Papel', ganador:''})
  }

  render() {
    return (
      <div id='tablero'>
        <Modal ganador={this.state.ganador} handleReset={this.handleReset}/>
        <div id='jugadas'>
            <Selector handleNext={this.handleNext} handlePrev={this.handlePrev} jugador={1} seleccion={this.state.seleccion1} ganadas={this.state.ganadas1}/>
            <div id="jugar">
              <Jugar jugada={this.jugada} />
            </div>
            <Selector handleNext={this.handleNext} handlePrev={this.handlePrev} jugador={2} seleccion={this.state.seleccion2} ganadas={this.state.ganadas2}/>
        </div>
      </div>
    )
  }
}
