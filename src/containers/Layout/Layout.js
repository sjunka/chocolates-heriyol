// React imports
import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

// Custom UI components
import AppBar from "../../components/UI/AppBar/AppBar";
import Drawer from "../../components/UI/Drawer/Drawer";

// Custom Components
import MainContent from "../MainContent/MainContent";
import Contacto from "../../containers/Contact/Contact";
// Material UI components

class Layout extends Component {
    state = {
        isDrawerOpen: false,
        trasni: {
            enter: 1000,
            exit: 1000
        },
        top: "top"
    };
    abrirDrawer = () => {
        this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
    };

    render() {
        return (
          <Fragment>
            <div>
                <AppBar abrirCajon={this.abrirDrawer} />

                <Drawer
                    openDrawer={this.state.isDrawerOpen}
                    onClose={this.abrirDrawer}
                    transitionDuration={this.state.trasni}
                />
            </div>

            <Switch>
                <Route exact path="/" component={MainContent} />
                <Route exact path="/contacto" component={Contacto} />

            </Switch>
           


          </Fragment>
        );
    }
}

export default Layout;
