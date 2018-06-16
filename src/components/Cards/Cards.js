import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component {
  render() {
    return <div className="App-Cards">{this.props.title}</div>;
  }
}

export default Cards;
