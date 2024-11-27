import React, { useState } from 'react';
import './Inicio.css'; // Importamos el archivo de estilos CSS

const Inicio = () => {
  const [celsius, setCelsius] = useState('');
  const [resultado, setResultado] = useState(null);

  const convertirCelsiusAFahrenheit = (c) => {
    return (c * 9 / 5) + 32;
  };

  const manejarCambio = (e) => {
    setCelsius(e.target.value);
  };

  const manejarPrediccion = () => {
    if (celsius === '') {
      alert('Por favor, ingresa una temperatura en Celsius.');
      return;
    }
    const fahrenheit = convertirCelsiusAFahrenheit(parseFloat(celsius));
    setResultado(fahrenheit);
  };

  return (
    <div className="container">
      <div className="caja">
        <h1 className="titulo">Conversión Celsius ↔ Fahrenheit</h1>
        <p className="descripcion">Ingresa una temperatura en grados Celsius y convierte a Fahrenheit.</p>
        
        <div className="formulario">
          <input
            type="number"
            value={celsius}
            onChange={manejarCambio}
            placeholder="Temperatura en Celsius"
            className="input"
          />
          <button onClick={manejarPrediccion} className="boton">Convertir</button>
        </div>
        
        {resultado !== null && (
          <div className="resultado">
            <p className="textoResultado">Temperatura en Fahrenheit: {resultado} °F</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inicio;
