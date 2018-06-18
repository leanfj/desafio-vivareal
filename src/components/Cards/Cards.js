import React, { Component } from "react";
import "./Cards.css";

import area from "./icon-area.svg";
import banho from "./icon-banho.svg";
import quarto from './icon-quarto.svg';

import apis from '../../api/Api';

class Cards extends Component {
  constructor(props){
    super(props);
    this.state = {
      dados: {}
    }
  
  }
  
  componentDidMount () {
    apis.listLimit(1, 10).then(
      response => {
        console.log(response.data);
      }
    );
    apis.listOne(1).then(
      response => {
        this.setState({dados: response.data});
      }
    );
  }

  render() {
    return (
      <div className="Card">
        {console.log(this.state.dados)}
          <div className="Card-Image">
            <img src="http://via.placeholder.com/300x250" alt="" />
            <span className="Card-Valor">{this.state.dados.price}</span>
          </div>
          <div className="Card-Info">
            <div className="Card-Infos">
              <span className="Card-Id">ID-{this.state.dados.id}</span>
              <div className="Card-Detalhes">
                <p>
                  {this.state.dados.title}
                </p>
              </div>
              <div className="Card-Descricao">
                <p>{this.state.dados.description}</p>
              </div>
            </div>
            <div className="Card-Items">
              <div className="Card-Item">
                <img src={area} alt="" className="Icon"/>
                <div className="Dados-Tamanho">{this.state.dados.squareMeters} M²</div>
              </div>
              <div className="Card-Item">
                <img src={quarto} alt="" className="Icon"/>
                <div className="Dados-Quartos">{this.state.dados.beds} quartos</div>              
              </div>
              <div className="Card-Item">
                <img src={banho} alt="" className="Icon"/>
                <div className="Dados-Banheiros">{this.state.dados.baths} banheiros</div>              
              </div>
              <div className="Button-Visualizar">
                <button>Visualizar Anuncio</button>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Cards;
