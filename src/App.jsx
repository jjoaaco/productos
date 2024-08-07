import { Component } from "react"
import { Component } from "react";
import { Redirect, Route, Switch } from "wouter";
import Login from "./componentes/Login";
import Alumnos from "./componentes/Alumnos";
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu: "alumnos"
    }
  }



  render(){
    return(
      <>
        {/* header */}
        <Switch>
          <Route path="/"><Redirect to = "/login" /></Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/alumnos">
            <Alumnos />
          </Route>
          <Route path="/alumnos/:curso/:id/:materia">
            {(params) => 
            <Alumnos 
            mat={params.materia}
            id={params.id}
            curso={params.cursos}
            />}
          </Route>
          <Route>ERROR 404</Route>
          <Route path="/Registro">
          </Route>
          <Route path="/Curso">
          </Route>

        </Switch>
        {/* footer */}
      </>
    )
  }
}
//sessionStorage 
//GUARDAR sessionStorage.setItem('token, valor')
//OBTENER sessionStorage.setItem('token')
//ELIMINAR sessionStorage.setItem('token)
//localstorage
//GUARDAR sessionStorage.setItem('token, valor')
//OBTENER sessionStorage.setItem('token')
//ELIMINAR sessionStorage.setItem('token)
