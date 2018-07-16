// React imports
import React, { Component } from "react";

// Custom components
import AppBar from "../../components/UI/AppBar/AppBar";
import Drawer from "../../components/UI/Drawer/Drawer";
import MainContent from "../MainContent/MainContent";

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
      <div>
        <AppBar abrirCajon={this.abrirDrawer} />

        <Drawer
          openDrawer={this.state.isDrawerOpen}
          onClose={this.abrirDrawer}
          transitionDuration={this.state.trasni}
        />

        <MainContent/>
      
      </div>
    );
  }
}

export default Layout;
