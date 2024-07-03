import React, { Component } from 'react';

class PersonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      dni: '',
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.editingPerson !== this.props.editingPerson) {
      if (this.props.editingPerson) {
        this.setState({
          name: this.props.editingPerson.name,
          email: this.props.editingPerson.email,
          dni: this.props.editingPerson.dni,
        });
      } else {
        this.setState({
          name: '',
          email: '',
          dni: '',
        });
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      name: this.state.name,
      email: this.state.email,
      dni: this.state.dni,
    };
    if (this.props.editingPerson) {
      person.id = this.props.editingPerson.id;
      this.props.updatePerson(person);
    } else {
      this.props.addPerson(person);
    }
    this.setState({
      name: '',
      email: '',
      dni: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{this.props.editingPerson ? 'Editar Persona' : 'Agregar Persona'}</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={(e) => this.setState({ email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="DNI"
          value={this.state.dni}
          onChange={(e) => this.setState({ dni: e.target.value })}
          required
        />
        <button type="submit">{this.props.editingPerson ? 'Actualizar' : 'Agregar'}</button>
      </form>
    );
  }
}

export default PersonForm;
