// React imports
import React, { Component, Fragment } from "react";

// Material UI imports
import CssBaseline from "@material-ui/core/CssBaseline";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

class App extends Component {
    render() {
        return (
            <Fragment>
                <CssBaseline />

                <AppBar 
                position="static"
                style={{backgroundColor: '#4E342E'}}
                >
                    <Toolbar>
                        <IconButton color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            Chocolates Heriyol
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Fragment>
        );
    }
}

export default App;
