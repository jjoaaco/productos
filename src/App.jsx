import React, { Component } from 'react';
import axios from 'axios';
import Personas from './Personas';

const apiUrl = "http://productos.ctpoba/api/categorias";

class App extends Component {
  state = {
    logged: false,
    personasLoaded: false,
    personasData: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ logged: true });
      this.loadPersonasData(); // Cargar datos de personas cuando se inicia sesión
    }, 2000); 
  }

  loadPersonasData = async () => {
    try {
      const response = await axios.get(apiUrl);
      this.setState({
        personasLoaded: true,
        personasData: response.data
      });
    } catch (error) {
      console.error('Error al cargar datos de personas', error);
    }
  };

  render() {
    const { logged, personasLoaded, personasData } = this.state;

    return (
      <div>
        {logged && personasLoaded ? (
          <Personas data={personasData} />
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    );
  }
}

export default App;
