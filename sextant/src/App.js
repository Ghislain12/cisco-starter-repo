import React, { Component } from "react";
import "./css/App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="My sextant application" />
        <div className="submenu">
          <Exhibit name="Exhibit container 1"></Exhibit>
          <Exhibit name="Exhibit container 2"></Exhibit>
          <Exhibit name="Exhibit container 3"></Exhibit>
        </div>
      </div>
    );
  }
}

export default App;
