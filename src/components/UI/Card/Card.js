import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 110,
    paddingTop: '68.25%', // 16:9
  },
  paper: {
    padding: 2,
    textAlign: 'center',
  },
};

function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="myimage"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h4">
          {props.title}
          </Typography>
          <Typography component="p">
          {props.content}
          </Typography>

          <Typography component="p">
          {props.redes}
          </Typography>


        <Grid container spacing={24}>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
               Facebook
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                Instagram
                </Paper>
            </Grid>
        </Grid> 

        <Grid container spacing={24}>
            <Grid item xs={6}>
                <Paper className={classes.paper}>
                Ifood                
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.paper}>Whatsapp</Paper>
            </Grid>
        </Grid>















        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
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