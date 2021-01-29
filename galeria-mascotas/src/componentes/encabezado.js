

import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Link from '@material-ui/core/Link';



// funcion para el icono svg

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

// estilos
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);


export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      
                        <Button href="/"  color="inherit" >   <HomeIcon /> </Button>

                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Galeria de Mascotas
            </Typography>
                    <Button variant="contained" color="primary" href="/lugares" title="ruta sin parametros">
                        Lugares</Button>
                    <Button variant="contained" color="primary" href="/mascotas"  title="ruta sin parametros">
                        Animales</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}




