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
  componentDidMount() {
    this.consultAll();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Spotippos</h1>
        </header>
        <div>
          <button
            className="App-button"
            onClick={() => {
              this.consultWithLimit();
            }}
          >
            Consulta
          </button>
          <input
            className="App-input"
            type="text"
            ref="page"
            defaultValue="1"
          />
          <input
            className="App-input"
            type="text"
            ref="limit"
            defaultValue="10"
          />
        </div>
        <input className="App-input" type="text" ref="id" />
        <button
          className="App-button"
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
