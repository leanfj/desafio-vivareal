import React, { Component } from 'react';
import './Menu.css';

import predio from './ic-numbers.svg';
import plus from './plus.svg';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <a className="Btn-Menu Active">
          <img src={predio} alt="Icone predio" />
          <span> Anúncios</span>
        </a>
        <a className="Btn-Menu">
          <img src={plus} alt="Icone Novo anuncio" />
          <span> Novo Anúncio</span>
        </a>
      </div>
    );
  }
}

export default Menu;
