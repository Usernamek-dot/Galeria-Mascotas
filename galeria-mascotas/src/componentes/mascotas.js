// ARCHIVO DE LAS TARJETAS
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

// estilos
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: '40%',
        margin: 50,
    },
    bullet: {
        display: 'inline-block',
        margin: '1px 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    cardsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
    }, media: {
        height: 300,
    },subheader:{
        fontSize: 12,
    },
});

// funcion

export default function Mascotas() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className={classes.cardsContainer}>
            <Card className={classes.root} id="colombia">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://www.np360.com.hk/sites/default/files/attraction/main_image/1804/08_Sea-Chinese_white_dolphin_800x800.jpg"
                        title="Species of toothed whale "
                    />
                    <CardContent>
                    <Typography className={classes.pos} color="textSecondary" >
          Colombia
        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            Pink {bull} Dolphin
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            The Amazon river dolphin, also known as the boto, bufeo or pink river dolphin, is a species of
                            toothed whale classified in the family Iniidae.
         </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>

            <Card className={classes.root} id="italy">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://www.wildlife.ca.gov/portals/0/Images/marine/lobsterfmp/spinylobster2.jpg"
                        title="Crustaceans"
                    />
                    <CardContent>
                    <Typography className={classes.pos} color="textSecondary">
          Italy
        </Typography>

                        <Typography gutterBottom variant="h5" component="h2">
                            {bull} Lobster
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lobsters are a family of large marine crustaceans.
                            Highly prized as seafood, lobsters are economically important, and are often one of the most profitable commodities in coastal areas they populate
         </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>

            <Card className={classes.root} id="germany">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://www.zoomadrid.com/sites/default/files/blog/2013/08/Lince-europeo.jpg"
                        title="Wild cat"
                    />
                    <CardContent>
                    <Typography className={classes.pos} color="textSecondary">
          Germany
        </Typography>

                        <Typography gutterBottom variant="h5" component="h2">
                            European{bull} Lynx
          </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            The Eurasian lynx is a medium-sized wild cat native to Northern, Central and Eastern Europe to Central Asia and Siberia, the Tibetan Plateau and the Himalayas.
           </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>

            <Card className={classes.root} id="colombia">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://th.bing.com/th/id/R2b45e1d0b7192346fa30fb8177f9c19a?rik=8qNI3qh%2fBe2zEA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-TDgcUwZPOOo%2fVG2cLe_UhDI%2fAAAAAAAATiQ%2fQFqIRRWeZtE%2fs1600%2fWoolly%252BMonkey1.jpg&ehk=gSjVXfEW3JRVSr5FzzV%2bQ2pxV4vKmhSHaPYwm08HOc4%3d&risl=&pid=ImgRaw"
                        title="Lagothrix"
                    />
                    <CardContent>
                    <Typography className={classes.pos} color="textSecondary">
         Colombia
        </Typography>

                        <Typography gutterBottom variant="h5" component="h2">
                            Woolly {bull} monkey
            </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Woolly monkeys are closely related to spider monkeys.[2] They have a thick brown coat with dark gray appendages.
                        The stomach area is black and heads are light brown. 
           </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            
            <Card className={classes.root} id="italy">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images.pexels.com/photos/584501/pexels-photo-584501.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        title="Crustaceans"
                    />
                    <CardContent>
                    <Typography className={classes.pos} color="textSecondary">
          Italy
        </Typography>

                        <Typography gutterBottom variant="h5" component="h2">
                             {bull} Crab
            </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        sually hidden entirely under the thorax. They live in all the world's oceans, in fresh water, and on land, are generally covered with a thick exoskeleton, and have a single pair of pincers.
           </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            
            <Card className={classes.root} id="germany">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://images.pexels.com/photos/5403275/pexels-photo-5403275.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        title="Mammal"
                    />
                    <CardContent>
                    <Typography className={classes.pos} color="textSecondary">
                    Germany
        </Typography>

                        <Typography gutterBottom variant="h5" component="h2">
                             {bull} Weasel
            </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Members of this genus are small, active predators with short legs.
                        Weasels feed on small mammals and have from time to time been considered vermin because some species took poultry from farms.
           </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            
            <Card className={classes.root} id="colombia">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://th.bing.com/th/id/R30107168b2a8eaffcbd5f2f89cb095e2?rik=om%2fZYf6Ojdg3xA&riu=http%3a%2f%2ffarm5.staticflickr.com%2f4126%2f4987254154_ffaa838eb0_z.jpg&ehk=t1zYEHvLjtDYt%2bMDQLpgbyiIm9EtQAHvO2a3o%2fNPJr0%3d&risl=&pid=ImgRaw"
                        title="Genus of whiptail lizards"
                    />
                    <CardContent>
                    <Typography className={classes.pos} color="textSecondary">
          Colombia
        </Typography>

                        <Typography gutterBottom variant="h5" component="h2">
                        {bull} Ameiva 
            </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Ameiva, commonly called jungle-runners, is a genus of whiptail lizards that belongs to the family Teiidae.
           </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            
            <Card className={classes.root} id="italy">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://aquaticheaven.files.wordpress.com/2011/06/461px-snail-wa_edit02.jpg?w=230"
                        title="Terrestrial pulmonate gastropod molluscs"
                    />
                    <CardContent>
                    <Typography className={classes.pos} color="textSecondary">
                    Italy
        </Typography>

                        <Typography gutterBottom variant="h5" component="h2">
                             {bull} Snail
            </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        A snail is, in loose terms, a shelled gastropod. The name is most often applied to land snails, terrestrial pulmonate gastropod molluscs.
           </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            
            <Card className={classes.root} id="germany">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://th.bing.com/th/id/OIP.YyxvlOjo19zAXlnFkfofIAHaE2?pid=Api&rs=1"
                        title="Species of goat-antelope"
                    />
                    <CardContent>
                    <Typography className={classes.pos} color="textSecondary">
          Germany
        </Typography>

                        <Typography gutterBottom variant="h5" component="h2">
                             {bull}  Chamois
            </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        The chamois are native to mountains in Europe, from west to east.
                        The chamois has also been introduced to the South Island of New Zealand. Some subspecies of chamois are strictly protected in the EU 
           </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            
            <Card className={classes.root} id="italy">
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://www.humphreysfarm.com/productcart/pc/catalog/5887-lg.jpg"
                        title="Crustaceans "
                    />
                    <CardContent>
                    <Typography className={classes.pos} color="textSecondary">
          Italy
        </Typography>

                        <Typography gutterBottom variant="h5" component="h2">
                             {bull} Shrimp
            </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Shrimp are decapod crustaceans with elongated bodies and a primarily swimming mode of locomotion – most commonly Caridea and Dendrobranchiata. 
           </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>

        </div>
    );
}
