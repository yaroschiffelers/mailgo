import React from "react";

import "./App.css";

class App extends React.Component {
  state = { version: "" };

  constructor(props) {
    super(props);
    fetch("https://api.npms.io/v2/package/mailgo")
      .then(r => {
        return r.json();
      })
      .then(v => {
        this.setState({ version: v.collected.metadata.version });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="mailgo.png" />
          <h1 className="mailgo-title">mailgo</h1>
          <h5 className="mailgo-version">v{this.state.version}</h5>
          <code className="code">
            WIP,{" "}
            <a className="App-link" href="https://github.com/manzinello/mailgo">
              GitHub
            </a>
            <br />
            <br />
            a classic mailto
            <br />
            <a
              className="App-link no-mailgo"
              href="mailto:matteo@manzinello.dev"
            >
              matteo@manzinello.dev
            </a>
            <br />
            with <strong>mailgo</strong>
            <br />
            <a className="App-link" href="mailto:matteo@manzinello.dev">
              matteo@manzinello.dev
            </a>
            <br />
            <br />
            <u>
              less then <strong>7KB</strong>
            </u>
            <br />
            <br />a project by
            <br />
            <a className="App-link" href="https://matteomanzinello.com">
              matteo manzinello
            </a>
          </code>
        </header>
      </div>
    );
  }
}

export default App;