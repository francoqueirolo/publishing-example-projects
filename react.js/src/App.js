import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ibk-checkbox
          label="Web components in reactjs"
          value="task01"
          disabled="false"
          checked="true"
        ></ibk-checkbox>
      </div>
    );
  }
}

export default App;
