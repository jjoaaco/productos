import { Component } from 'react';
import Boton from './Boton';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

  render() {
    return (
      <div className='Contenedor'>
        Componente Login
        
        <Boton
          ruta = '/alumnos'
        >ir a alumnos</Boton>
      </div>
    )
  }
}
