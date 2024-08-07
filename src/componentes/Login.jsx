import { Component } from "react";
<<<<<<< HEAD


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
=======
import '../App.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            pass: ""
        }
    }

    render() {
        return (
            <div className="Login">
                <h2>Iniciar Sesión</h2>
                <p>Ingresa tus credenciales para acceder a tu cuenta.</p>
                <input 
                    type="text" 
                    placeholder="Usuario"
                    value={this.state.user} 
                    onChange={(e) => this.setState({ user: e.target.value })} 
                />
                <input 
                    type="password" 
                    placeholder="Contraseña"
                    value={this.state.pass} 
                    onChange={(e) => this.setState({ pass: e.target.value })} 
                />
                <button onClick={() => this.props.iniciarsesion(this.state)}>Iniciar sesión</button>
            </div>
        );
    }
}
>>>>>>> 99c6e2a34b611c395dc813f324772b57c30f2723
