
// ARCHIVO PRINCIPAL

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


import Header from './componentes/encabezado';
import Rutas from './router';
// constante en donde se agregan los componentes de la app(header,lugares, mascotas)
const Root = () => {
  return (
    <div>
      <Header />
      <div className="contenedor">
        <Rutas/>
      </div>
    </div>
  )
}

// codigo en donde se pone en funcion la constante y se agrega al div #root
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
