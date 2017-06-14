import React from "react";
import { compose, withState, withHandlers } from "recompose";
import logo from "./logo.svg";

const styles = {
  app: {
    display: "flex",
    flexDirection: "column"
  },
  appHeader: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    padding: 20,
    backgroundColor: "black",
    color: "white"
  },
  button: {
    width: 200,
    height: 30,
    display: "flex",
    alignSelf: "center"
  },
  appLogo: {
    animation: "App-logo-spin infinite 20s linear",
    height: 80,
    transform: "rotate(0deg)",
    WebkitTransform: "rotate(360deg)"
  },
  appIntro: {
    fontSize: "large"
  }
};

const increment = ({ setCounter, count }) => e => setCounter(++count);

const enhance = compose(
  withState("count", "setCounter", 0),
  withHandlers({
    increment
  })
);

function App({ count, increment }) {
  return (
    <div style={styles.app}>
      <div style={styles.appHeader}>
        <img src={logo} style={styles.appLogo} className="" alt="logo" />
        <h2>Welcome to React Counter {count}</h2>
        <button style={styles.button} onClick={increment}>Increment</button>
      </div>
      <p style={styles.appIntro}>
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default enhance(App);
