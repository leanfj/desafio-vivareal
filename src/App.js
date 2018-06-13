import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Api
import { listOne, listLimit, listAll } from './api/Api';

//Plugins
import {
  Button,
  Grid,
  Row,
  Col,
  FormGroup,
  FormControl
} from 'react-bootstrap';

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
        <Grid>
          <Row className="show-grid">
            <Col xs={12}>
              <FormGroup>
                <FormControl type="text" ref="page" defaultValue="1" />
                <FormControl type="text" ref="limit" defaultValue="10" />
                <Button
                  bsStyle="primary"
                  onClick={() => {
                    this.consultWithLimit();
                  }}
                >
                  Consulta
                </Button>
              </FormGroup>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12}>
              <FormGroup>
                <FormControl className="App-input" type="text" ref="id" />
                <Button
                  bsStyle="primary"
                  onClick={() => {
                    this.consultOne();
                  }}
                >
                  Consulta Um
                </Button>
              </FormGroup>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
