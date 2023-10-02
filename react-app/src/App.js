import React, { Component } from "react";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Service from "./Service";
import Conditions from "./Conditions";
import "./styles/responsive.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Service" component={Service} />
          <Route path="/Testimonials" component={Testimonials} />
          <Route path="/Conditions" component={Conditions} />
        </Switch>
      </Router>
    );
  }
}

export default App;
