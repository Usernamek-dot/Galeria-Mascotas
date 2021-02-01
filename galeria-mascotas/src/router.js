// ENRUTAR LAS VISTAS 
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Lugares from './componentes/lugares';
import Mascotas from './componentes/mascotas';
import NotFound from './componentes/notFound';


export default function Rutas() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Lugares} />  {/* ruta por defecto */}
                <Route exact path="/lugares" component={Lugares} /> {/* ruta sin parametros */}

                {/* ruta para que todas las tarjetas de muestren, se le pasa el parametro con el valor ALL */}
                <Route exact path="/mascotas" render={() => {
                    return <Mascotas pais="all" />
                }} />

                {/*
                ruta individual
                 se usa la propiedad render para espesificar que se pasa un nuevo parametro:
                 pais a el componenete mascotas  */}

                <Route path="/mascotas/:pais" render={({ match }) => {
                    return <Mascotas pais={match.params.pais} />
                }} />
                <Route component={NotFound} />

            </Switch>
        </BrowserRouter>
    );
}


