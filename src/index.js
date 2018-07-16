// React imports
import React from "react";
import ReactDOM from "react-dom";

// React Router
//import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom"

import App from "./App";

//Imports Material UI things
import "typeface-roboto";


//Wrapping App component into HashRouter # for routing (Github pages)
const app = (
  <HashRouter>
    <App />
  </HashRouter>
);

//Render app variable as Root component
ReactDOM.render(app, document.getElementById("root"));
