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
                    <Route exact path="/" component={Lugares} />
                    <Route exact path="/lugares" component={Lugares} /> {/* ruta sin parametros */}

                    <Route exact path="/mascotas" component={Mascotas} />{/* ruta sin parametros */}

                    <Route exact path="/mascotas/:pais" component={Mascotas} />{/* ruta con parametros */}
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        );
    }


