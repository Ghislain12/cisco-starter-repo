import React, { Component } from "react";
import "./css/App.css";
import Banner from "./Banner";
import Exhibit from "./Exhibit";
import AddressDisplay from "./AddressDisplay";
import PylonConnector from './PylonConnector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner bannerText="My sextant application" />
        <div className="submenu">
          <Exhibit name="Public IPv4 Address">
            <AddressDisplay url="https://api.ipify.org?format=json" />
          </Exhibit>
          <Exhibit name="Public IPv6 Address">
            <AddressDisplay url="https://api64.ipify.org?format=json" />
          </Exhibit>
          <Exhibit name="Pylon Packet Latency">
            <PylonConnector />
          </Exhibit>
        </div>
      </div>
    );
  }
}

export default App;
