import React, { Component } from 'react';

//CSS
import './Filters.css';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    // this.setState({idValue: e.target.value});
    this.props.onIdChange(e.target.value);
  }

  render() {
    const idValue = this.props.idValue;
    return (
      <div className="App-Filters">
        <span>Filtro</span>
        <div className="Input-Controls">
          <div className="Input">
            <label htmlFor="Id">Id</label>
            <input type="text" id="Id" name="Id" value={idValue} onChange={this.handleChange} />
          </div>
          <div className="Input">
            <label htmlFor="Area">Area</label>
            <input type="text" id="Area" name="Area" />
          </div>
        </div>
        <hr />
        <div className="Input-Controls">
          <div className="Input">
            <label htmlFor="Quartos">Quartos</label>
            <input type="text" id="Quartos" name="Quartos" />
          </div>
          <div className="Input">
            <label htmlFor="Banheiros">Banheiros</label>
            <input type="text" id="Banheiros" name="Banheiros" />
          </div>
        </div>
        <hr />
        <span>Valor</span>
        <div className="Input-Controls">
          <div className="Input">
            <label htmlFor="Valor-Min">Valor Min</label>
            <input type="text" id="Valor-Min" name="Valor-Min" />
          </div>
          <div className="Input">
            <label htmlFor="Valor-Max">Valor Max</label>
            <input type="text" id="Valor-Max" name="Valor-Max" />
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
