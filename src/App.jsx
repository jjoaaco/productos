import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    categorias: [],
    categoria_id: null,
    productos: []
  }
}
  buscarCategorias(categoria_id) {
//  const url = "https://10.0.4.103:3000/api/categorias"
    const url="http://productos.ctpoba/api/categorias"
    const config ={
    params:{ categoria_id }
    }
    axios.get(url)
      .then((resp) => {
        this.setState({ categorias: resp.data.categorias });
      })
      .catch((error) => {
        console.log(error);
      });
  }
 buscarProductos() {
    const url = "https://productos.ctpoba/api/productos"
//  const url = "https://10.0.4.103:3000/api/productos"
    axios.get(url)
      .then((resp) => {
        this.setState({ productos: resp.data.productos});
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <span>Categorias</span>
        <input type="button"
          value="Buscar"
          onClick={() => this.buscarCategorias()} />
        <span>Productos</span>
        <input type='button'
           value="Buscar"
           onClick={() => this.buscarProductos(this.state.categoria_id)} />
        <select
          value={this.state.categoria_id}
          onChange={(event) => this.setState({ categoria_id: event.target.value })}>

          {this.state.categorias.map((categoria, index) =>
            <option key={categoria.id} value={categoria.id}>
              {categoria.nombre}
            </option>
          )}
        </select>
        <h3>{this.state.categoria_id}</h3>
        {this.statte.productos.map((prod, id) =>
        <span key={productos.id}>{ productos.nombre }</span>
      )}
      </div>
    );
  }
}