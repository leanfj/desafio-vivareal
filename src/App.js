import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Menu from './components/Menu/Menu';
import Filters from './components/Filters/Filters';
import Cards from './components/Cards/Cards';

//Api
import apis from './api/Api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: [],
      idValue: ''
    }
    this.idChange = this.idChange.bind(this);
  }

  componentDidMount() {
    apis.listLimit(1, 10).then(
      response => {
        this.setState({
          dados: response.data.properties
        });
      }
    );

  }
  idChange (argIdValue) {
    this.setState({idValue: argIdValue});
    if (argIdValue) {
      apis.listOne(argIdValue).then(
        response => {
          this.setState({dados: [response.data]});
        }
      );
    } else {
      apis.listLimit(1, 10).then(
        response => {
          this.setState({
            dados: response.data.properties
          });
        }
      );
    }
  }

  render() {
    const idValue = this.state.idValue
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SPOTIPPOS - ANÚNCIOS </h1>
        </header>
        <div className="Main">
          <Menu />
          <Filters idValue={idValue} onIdChange={this.idChange}/>
          <div className="App-Cards">
            {this.state.dados.map((item, index) => {
              return <Cards key={index} Id={item.id} Price={item.price} SquareMeters={item.squareMeters} Title={item.title} Description={item.description} Baths={item.baths} Beds={item.beds} />
            })}
            
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
