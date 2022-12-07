import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './Componentes/boton';
import Pantalla from './Componentes/Pantalla';
import BotonClear from './Componentes/Boton-Clear';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const[input, setInput] = useState('');

  const agregarInput = val =>{
    setInput(input + val);
  };

  const calResultado = () => {
    if(input){
      setInput(evaluate(input));
    }else{
      alert("No mames, pon algo valido")
    }
    
  };


  return (
    <div className='App'>
      <div className='App' >
        <div className='freecodecamp-logo-contenedor'>          
          <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='logotipo' />
        </div>
        <div className='contenedor-calculadora'>
          <Pantalla input={input}/>
          <div className='fila'>
            <Boton oneClic={agregarInput}>1</Boton>
            <Boton oneClic={agregarInput}>2</Boton>
            <Boton oneClic={agregarInput}>3</Boton>
            <Boton oneClic={agregarInput}>+</Boton>
            </div>
          <div className='fila'>
            <Boton oneClic={agregarInput}>4</Boton>
            <Boton oneClic={agregarInput}>5</Boton>
            <Boton oneClic={agregarInput}>6</Boton>
            <Boton oneClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton oneClic={agregarInput}>7</Boton>
            <Boton oneClic={agregarInput}>8</Boton>
            <Boton oneClic={agregarInput}>9</Boton>
            <Boton oneClic={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton oneClic={calResultado}>=</Boton>
            <Boton oneClic={agregarInput}>0</Boton>
            <Boton oneClic={agregarInput}>.</Boton>
            <Boton oneClic={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear oneClic={()=> setInput('')}>
              Clear
            </BotonClear>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
