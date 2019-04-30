import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="mailgo.png" />
        <a className="App-link" href="mailto:matteo@manzinello.dev">
          matteo@manzinello.dev
        </a>
        <code className="code">
          {
            '<script src="https://cdn.jsdelivr.net/gh/manzinello/mailgo/dist/mailgo.min.js"></script>'
          }
        </code>
      </header>
    </div>
  );
}

export default App;
