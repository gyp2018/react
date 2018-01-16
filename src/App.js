import React, { Component } from "react";
import Hello from "./app/Hello";
import World from "./app/World";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Hello name="React" />
        <World />
      </div>
    );
  }
}

export default App;
