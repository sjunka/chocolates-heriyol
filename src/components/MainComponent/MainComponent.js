import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 110,
    paddingTop: '56.25%', // 16:9
  },
};

//const image = window.location.origin + '/fresas_con_chocolate.jpg'

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          title="StrawberryChocolate"
          image="./cofres_blanco_negro.jpeg"
        />

        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Heriyol
          </Typography>
          <Typography component="p">
            Chocolate artesanal hecho en Santander.
            Producto ideal para cada ocasión, arreglos y tortas. 
            <br/>
            Contactanos para mayor información
          </Typography>
            <hr/>
          <Typography component="p">
            Celular: <strong>3167063467</strong>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Productos
          </Button>
          <Button size="small" color="primary">
            Comprar
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);