import React, { Component } from "react";
import "./Cards.css";

import area from "./icon-area.svg";
import banho from "./icon-banho.svg";
import quarto from './icon-quarto.svg';

class Cards extends Component {
  render() {
    return (
      <div className="Card">
        <div className="Card-Image">
          <img src="http://via.placeholder.com/300x250" alt="" />
          <span className="Card-Valor">{this.props.Price}</span>
        </div>
        <div className="Card-Info">
          <div className="Card-Infos">
            <span className="Card-Id">ID - {this.props.Id}</span>
            <div className="Card-Detalhes">
              <p>
                {this.props.Title}
              </p>
            </div>
            <div className="Card-Descricao">
              <p>
                {this.props.Description}
              </p>
            </div>
          </div>
          <div className="Card-Items">
            <div className="Card-Item">
              <img src={area} alt="" className="Icon" />
              <div className="Dados-Tamanho">{this.props.SquareMeters} M²</div>
            </div>
            <div className="Card-Item">
              <img src={quarto} alt="" className="Icon" />
              <div className="Dados-Quartos">{this.props.Beds} quartos</div>
            </div>
            <div className="Card-Item">
              <img src={banho} alt="" className="Icon" />
              <div className="Dados-Banheiros"> {this.props.Baths} banheiros</div>
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
