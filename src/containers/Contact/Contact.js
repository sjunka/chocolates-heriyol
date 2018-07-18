// React components
import React from 'react';
import PropTypes from 'prop-types';

// Material UI components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// Custom componets
import Card from "../../components/UI/Card/Card";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function Contact (props) {
  const { classes } = props;

  return (
    <div style={{ paddingBottom: 20 }}>
        <Card 
        title="Contacto"
        content="Sorprendente con nuestros productos siguenos en nuestras redes oficiales"
        image="./heriyol_contacto.jpg"
        > 

        </Card>
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);