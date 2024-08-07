<<<<<<< HEAD
import { Component } from "react";
import { Route,Redirect } from "wouter";
import Login from "./componentes/Login";
import './App.css'
import Alumnos from "./componentes/Alumnos";

export default class App extends Component{
constructor(){
  super (props);
  this.state = {
 
  }
}

render(){
  return(
    <>
    <Route path="/">
    <Redirect to="/Login"/>
    </Route>
     {/* header */}
    <div>
      <Route path="/Login"
      ></Route>
     <Login
      cambiarMenu={(opcion) => this.setState({menu:opcion})}
     />
        <Route path="/Alumnos"
      ></Route>
        <Alumnos/> 
        {/* footer */}
    </div>
    </>

   )
=======
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './componentes/Header';
import Gestion from './componentes/Gestion';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import Tarjetas from './componentes/Tarjetas';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      logged: false,
      personas: [],
      showLogin: true,
      showRegister: false,
      
    };
  }

  registrodeusuario = (datos) => {
    const url = "https://personas.ctpoba.edu.ar/api/registrar";
    axios.post(url, datos)
      .then((resp) => {
        console.log(resp.data);
        alert("Se registro correctamente")
      })
      .catch((error) => {
        console.log(error);

      });
  }

  iniciarsesion = (datos) => {
    const url2 = "https://personas.ctpoba.edu.ar/api/ingresar";
    axios.post(url2, datos)
      .then((resp) => {
        console.log(resp.data);
        if (resp.data.status === "ok") {
          this.setState({ token: resp.data.token, logged: true });
          
        } else {
          alert("No se pudo conectar al servidor");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  consultalistapriv = () => {
    if (this.state.token !== null) {
      const config = {
        headers: {
          authorization: this.state.token
        }
      };
      const url3 = "https://personas.ctpoba.edu.ar/api/personas";
      axios.get(url3, config)
        .then((resp) => {
          console.log(resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Inicie sesión");
    }
  }

  enviarpersona = (datos) => {
    if (this.state.token !== null) {
      const config = {
        headers: {
          authorization: this.state.token
        }
      };
      const url4 = "https://personas.ctpoba.edu.ar/api/personas";
      axios.post(url4, datos, config)
        .then((resp) => {
          console.log(resp.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("error");
    }
  }

  mostrarpersona = (datos) => {
    if (this.state.token !== null) {
      const config = {
        headers: {
          authorization: this.state.token
        },
        params: {
          busqueda: datos?.documento
        }
      };

      const url5 = "https://personas.ctpoba.edu.ar/api/personas";
      axios.get(url5, config)
        .then((resp) => {
          const COINCIDENCIA = resp.data.personas.find(persona => persona.documento === datos.documento);
          if (COINCIDENCIA) {
            this.setState({ personas: [COINCIDENCIA] });
          } else {
            this.setState({ personas: resp.data.personas });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("MAL");
    }
  }

  borrarpersona = (persona_id) => {
    if (this.state.token !== null) {
      const config = {
        headers: {
          authorization: this.state.token
        },
        params: { persona_id }
      };

      const url = "https://personas.ctpoba.edu.ar/api/personas";
      axios.delete(url, config)
        .then((resp) => {
          this.mostrarpersona({})
          console.log("se elimino correctamente");
          alert("Se elimino correctamente")
        })
        .catch((error) => {
          console.log(error + "no se pudo eliminar");
        });
    }
  }

  actualizarpersona = (datos, persona_id) => {
    if (this.state.token !== null) {
      const config = {
        headers: {
          authorization: this.state.token
        },
        params: { persona_id }
      };
      console.log({ config });

      const url = `https://personas.ctpoba.edu.ar/api/personas/`;
      axios.put(url, datos, config)
        .then((resp) => {
          console.log(resp.data);
          alert("seactualizo correctamente")
          this.mostrarpersona({})
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Inicie sesión");
    }
  }

  handleLoginClick = () => {
    this.setState({ showLogin: true, showRegister: false });
  };

  handleRegisterClick = () => {
    this.setState({ showLogin: false, showRegister: true });
  };
  render() {
    return (
      <div className='Contenedor'>
        <Header 
          onLoginClick={this.handleLoginClick} 
          onRegisterClick={this.handleRegisterClick} 
        />
        {!this.state.logged ? (
          <>
            {this.state.showLogin && <Login iniciarsesion={(datos) => this.iniciarsesion(datos)} />}
            {this.state.showRegister && <Registro registrodeusuario={(datos) => this.registrodeusuario(datos)} />}
          </>
        ) : (
          <div>
            <Gestion enviarpersona={(datos) => this.enviarpersona(datos)}
              mostrarpersona={(datos) => this.mostrarpersona(datos)} />
          </div>
        )}

        <div className='Tarjetasapp'>
          {this.state.personas.map((per, index) =>
            <Tarjetas
              key={per._id}
              persona={per}
              borrarpersona={(persona_id) => this.borrarpersona(persona_id)}
              actualizarpersona={(datos, persona_id) => this.actualizarpersona(datos, persona_id)}
            />
          )}
        </div>
      </div>
    );
>>>>>>> 99c6e2a34b611c395dc813f324772b57c30f2723
  }
}
