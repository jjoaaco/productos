import { Component } from "react";
import Boton from "./Boton";


export default class Alumnos extends Component{
constructor(){
  super (props);
  this.state = {

  }
  render(){
    return(
        <div className="Alumnos">
          Componente alumnos
       <Boton
         Click={() => this.props.cambiarMenu("alumnos")}
         
         >
         Ir a Login
         </Boton>
        </div>
    )
  }
}

}