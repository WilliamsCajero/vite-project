import './App.css'
import { Boton } from './assets/button'
import { useState } from 'react'

function App() {
  const [estado, setEstado] = useState("Verdadero");
  return(
    <>
      <div>
        <h1>{estado}</h1>

        <button
          onClick={() => {
            if (estado == "Verdadero") {
              setEstado("Falso");
            } else{
              setEstado("Verdadero");
            }
          }}
        >
          Cambiar Estado
        </button>

        <Boton texto={'Compras'}></Boton>

        <button
        onClick={() => {
          alert("Hola");
        }}
        >
          Alerta
        </button>
      </div>
    </>
  );
}

export default App;
