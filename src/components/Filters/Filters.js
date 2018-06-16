import React, { Component } from 'react';

//CSS
import './Filters.css';

class Filters extends Component {
  render() {
    return <div className="App-Filters">{this.props.title}</div>;
  }
}

export default Filters;
