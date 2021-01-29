import React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    h1: {
        fontSize: 50,
        marginTop: 40,
    },

});


export default function NotFound() {
    const classes = useStyles();

    return(
        <div className={classes.error}>
        <h1 className={classes.h1}>La dirección que buscó no se encuentra disponible</h1>
        <h2 className={classes.e404}> Error 404</h2>
        <Button component={Link} href="/" color="primary"> Ir al inicio </Button>
        </div>
    
    )
}