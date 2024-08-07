import { Component } from "react";
import { Link } from "wouter";

export default class Boton extends Component{
    constructor(){
      super (props);
      this.state = {}

    render()
      return(
        <Link to= {this.props.ruta} >
        <span className="Boton"
         >
        <Boton
        ruta ="/alumnos"
        >
        Ir a alumnos
        </Boton>

        </span>
        </Link>
      ) 
      }


    }
