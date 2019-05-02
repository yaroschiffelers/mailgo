import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="mailgo.png" />
        <h1>mailgo</h1>
        <code className="code">
          WIP,{" "}
          <a class="App-link" href="https://github.com/manzinello/mailgo">
            GitHub
          </a>
          <br />
          <br />
          without mailgo
          <br />
          <a class="App-link no-mailgo" href="mailto:matteo@manzinello.dev">
            matteo@manzinello.dev
          </a>
          <br />
          with mailgo
          <br />
          <a class="App-link" href="mailto:matteo@manzinello.dev">
            matteo@manzinello.dev
          </a>
          <br />
          <br />a project by
          <br />
          <a class="App-link" href="https://matteomanzinello.com">
            matteo manzinello
          </a>
        </code>
      </header>
    </div>
  );
}

export default App;