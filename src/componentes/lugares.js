
// ARCHIVO DE LA SECCION DEL ACORDION

// se importan los elementos y arhivos necesarios
import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import './lugares.css';
import './mascotas';

// estilos

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: 70,
            width: '95%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        }, 

    }),
);

// funcion
export default function Lugares() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className="ItalyFlag img" >
                    </div>
                    <Typography className={classes.heading}>Italy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The most Common animals In Italy are Lobsters, Crabs, Snails and Shrimp.
            </Typography>
                </AccordionDetails>
                <Button   title="ruta con parametros" component={Link} href="/mascotas/Italy" color="inherit">Ir a Animales de Italia</Button>

            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <div className="ColombiaFlag img"></div>

                    <Typography className={classes.heading}>Colombia</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The most Common animals In Colombia are Pink Dolphins, Belly Monkey and Metallic Lizards.
            </Typography>
                </AccordionDetails>
                <Button component={Link} title="ruta con parametros"  href="/mascotas/Colombia" color="inherit">Ir a Animales  de Colombia</Button>

            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <div className="GermanyFlag img"></div>

                    <Typography className={classes.heading}>Germany</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        The most Common animals In Germany are European lynx, Weasel and Rebeco.
            </Typography>
                </AccordionDetails>
                <Button component={Link} title="ruta con parametros"  href="/mascotas/Germany" color="inherit">Ir a Animales de Alemania    </Button>

            </Accordion>
        </div>
    );
}