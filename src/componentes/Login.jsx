import { Component } from "react";


export default class Login extends Component{
constructor(){
  super (props);
  this.state = {}


  
  render(){
    return(
        <div className="Contenedor">
         Componente Login

         <span className="Boton"
         onClick={() => this.props.cambiarMenu("Login")}
         
         >

         </span>
        </div>
    )
  }
}

}
