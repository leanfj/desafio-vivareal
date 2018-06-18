import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Menu from './components/Menu/Menu';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SPOTIPPOS - ANÚNCIOS </h1>
        </header>
        <div className="Main">
          <Menu />
          <Filters />
          <div className="App-Cards">
            <Cards title="Cards" />
          </div>
        </div>
      </div>;
  }
}

export default App;
