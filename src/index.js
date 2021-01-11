import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [width, setWidth] = useState(0);
  const [loading, setLoading] = useState(true);
  const styles = {
    backgroundColor: "#00cb78",
    width: width + "%"
  };
  useEffect(() => {
    if (width < 100) {
      const interval = setInterval(() => {
        setWidth(width + 0.1);
      }, 1);
      return () => clearInterval(interval);
    } else {
      setLoading(false);
    }
  }, [width]);

  if (loading) {
    return (
      <div className="App">
        <div style={styles}>
          <span>{width.toFixed(0)}%</span>
        </div>
        <button onClick={() => setWidth(12)}>Reset</button>
      </div>
    );
  }
  return (
    <div>
      <h1>Hello from app </h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
