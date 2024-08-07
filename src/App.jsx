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
  }
}