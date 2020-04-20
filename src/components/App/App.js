import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";

import PageFeeling from "../PageFeeling/PageFeeling";
import PageUnderstanding from "../PageUnderstanding/PageUnderstanding";
import PageSupported from "../PageSupported/PageSupported";
import PageComments from "../PageComments/PageComments";
import PageReview from "../PageReview/PageReview";
import PageSubmitted from "../PageSubmitted/PageSubmitted";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />
          <Route exact path="/" component={PageFeeling} />
          <Route path="/understanding" component={PageUnderstanding} />
          <Route path="/supported" component={PageSupported} />
          <Route path="/comments" component={PageComments} />
          <Route path="/review" component={PageReview} />
          <Route path="/submitted" component={PageSubmitted} />
        </Router>
      </div>
    );
  }
}

export default App;
