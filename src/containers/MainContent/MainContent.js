// React imports
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// Custom Components
import MainComponent from "../../components/MainComponent/MainComponent";
import Contacto from "../Contact/Contact";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

// Styles object
const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing.unit * 1,
        textAlign: "center",
    }
});

class MainContent extends Component {
    render() {
        const { classes } = this.props;

        return (
            <Fragment>
                <div className={classes.root}>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <Paper 
                            className={classes.paper}
                            >
                                <MainComponent />
                                <Contacto />

                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </Fragment>
        );
    }
}

MainContent.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainContent);
