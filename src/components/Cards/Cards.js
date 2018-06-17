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
            <span className="Card-Valor">R$10.00</span>
          </div>
          <div className="Card-Info">
            <div className="Card-Infos">
              <span className="Card-Id">ID-123</span>
              <div className="Card-Detalhes">
                Imovel Id-123, com 2 quartos e 2 banheiros.
              </div>
              <div className="Card-Descricao">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                nam ullam magnam aperiam temporibus voluptatem accusantium ad
                porro maxime asperiores.
              </div>
            </div>
            <div className="Card-Items">
              <div className="Card-Item">
                <img src={area} alt="" className="Icon"/>
                <div className="Dados-Tamanho">73 M²</div>
              </div>
              <div className="Card-Item">
                <img src={quarto} alt="" className="Icon"/>
                <div className="Dados-Quartos">2 quartos</div>              
              </div>
              <div className="Card-Item">
                <img src={banho} alt="" className="Icon"/>
                <div className="Dados-Banheiros">2 banheiros</div>              
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
