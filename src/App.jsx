import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

export default class App extends Component {
  state = {
    categorias: [],
    categoria_id: ''
  };

  buscarCategorias() {
    const url = "https://productos.ctpoba.edu.ar/api/categorias";
    axios.get(url)
      .then((resp) => {
        this.setState({ categorias: resp.data.categorias });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <span>APP</span>
        <input type="button"
          value="Buscar"
          onClick={() => this.buscarCategorias()} />
        <select
          value={this.state.categoria_id}
          onChange={(event) => this.setState({ categoria_id: event.target.value })}>

          {this.state.categorias.map((categoria, index) =>
            <option key={categoria.id} value={categoria.id}>
              {categoria.nombre}
            </option>
          )}
        </select>
      </div>
    );
  }
}