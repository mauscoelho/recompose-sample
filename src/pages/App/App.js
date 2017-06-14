import React from "react";
import { compose, withState, withHandlers, defaultProps } from "recompose";
import { FormattedMessage } from "react-intl";
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
    height: 80,    
  },  
};

function App({ count, increment, name }) {
  return (
    <div style={styles.app}>
      <div style={styles.appHeader}>
        <img src={logo} style={styles.appLogo} className="" alt="logo" />
        <h2>
          <FormattedMessage
            id="app.welcome"
            defaultMessage={`Welcome {name}, you have {count, number} {count, plural,
                      one {message}
                      other {messages}
                    }`}
            values={{ name: <b>{name}</b>, count }}
          />
        </h2>
        <button style={styles.button} onClick={increment}>Increment</button>
      </div>      
    </div>
  );
}

const increment = ({ setCounter, count }) => e => setCounter(++count);

const enhance = compose(
  defaultProps({
    name: "Mauricio"    
  }),
  withState("count", "setCounter", 1),
  withHandlers({
    increment
  })
);

export default enhance(App);
