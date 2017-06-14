import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App/App";
import registerServiceWorker from "./registerServiceWorker";

const styles = {
  app: {
    display: "flex",
    flex: 1,
    margin: 0,
    padding: 0
  }
};

ReactDOM.render(
  <App style={styles.app} />,
  document.getElementById("root")
);
registerServiceWorker();
