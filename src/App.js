import React, { Component } from "react";
import Hello from "./app/Hello";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Hello name="React" />
      </div>
    );
  }
}

export default App;
