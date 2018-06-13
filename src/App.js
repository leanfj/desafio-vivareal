import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Api
import { listOne, listLimit, listAll } from './api/Api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  consultAll() {
    listAll();
  }
  consultOne() {
    let argId = this.refs.id.value;
    listOne(argId);
  }
  consultWithLimit() {
    let argPage = this.refs.page.value;
    let argLimit = this.refs.limit.value;
    listLimit(argPage, argLimit);
  }
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Spotippos</h1>
        </header>
        <input type="text" ref="id" defaultValue="1" />
        <button
          onClick={() => {
            this.consultOne();
          }}
        >
          Consulta Um
        </button>
      </div>
    );
  }
}

export default App;
