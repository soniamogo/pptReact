import React, { Component } from 'react'; 
import './style.css';
import Selector from '../Selector';
import Jugar from '../Jugar';
import Modal from '../Modal';

export default class Ppt extends Component {
  constructor(props) {
    super(props)
    this.opciones = ['piedra', 'papel', 'tijera']
    this.state = {
       seleccion1: 'piedra',
       seleccion2: 'papel',
       ganadas1:0,
       ganadas2:0,
       ganador:''
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
      var indice = this.opciones.indexOf(this.state.seleccion1)
      if(indice === 0) indice=2;
      else indice--
      this.setState({seleccion1:this.opciones[indice]})
    }else{
      var indice = this.opciones.indexOf(this.state.seleccion2)
      if(indice === 0) indice=2;
      else indice--
      this.setState({seleccion2:this.opciones[indice]})
    }
  }

  jugada = () =>{
    var ganador = ''
    let {ganadas1, ganadas2} = this.state;
    
    if(this.state.seleccion1 === 'tijera' && this.state.seleccion2 === 'papel' ||
       this.state.seleccion1 === 'piedra' && this.state.seleccion2 === 'tijera' ||
       this.state.seleccion1 === 'papel' && this.state.seleccion2 === 'piedra'){
        ganador = 'Jugador 1';
        ganadas1++;
    }else if (this.state.seleccion2 === 'tijera' && this.state.seleccion1 === 'papel' ||
              this.state.seleccion2 === 'piedra' && this.state.seleccion1 === 'tijera' ||
              this.state.seleccion2 === 'papel' && this.state.seleccion1 === 'piedra'){
                ganador = 'Jugador 2';
                ganadas2++;
    }else{
        ganador = 'Empate'
    }
        // console.log(ganador)
        this.setState({ganador, ganadas1, ganadas2})
  }

  render() {
    const {seleccion1, seleccion2, ganador, ganadas1, ganadas2} = this.state;
    return (
      <div id='tablero'>
        {ganador!=='' && <Modal ganador={ganador} handleReset={()=>{this.setState({ganador:'', seleccion1:'piedra', seleccion2:'papel'})}} />}
        <div id='jugadas'>
            <Selector handleNext={this.handleNext} handlePrev={this.handlePrev} jugador={1} seleccion={seleccion1} ganadas={ganadas1}/>
            <Jugar jugada={this.jugada}/>
            <Selector handleNext={this.handleNext} handlePrev={this.handlePrev} jugador={2} seleccion={seleccion2} ganadas={ganadas2}/>
        </div>
      </div>
    )
  }
}
