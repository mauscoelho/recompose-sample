import React from "react";
import { compose, withState, withHandlers } from "recompose";
import logo from "./logo.svg";
import "./App.css";

const enhance = compose(
  withState('counter', 'updateCounter', 0),
  withHandlers({
    increment: ({updateCounter}) => updateCounter(counter => counter +1)
  })
)

function App({counter, increment}) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React Counter {counter}</h2>
        <button onClick={increment}>Increment</button>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default enhance(App);
