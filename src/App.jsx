import React, { Component } from 'react';
import './styles.css';
import api from './api';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Personas from './components/Personas';
import PersonForm from './components/PersonForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      loading: true,
      persons: [],
      editingPerson: null,
    };
  }

  async componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setState({ logged: true });
      await this.loadPersons();
    }
    this.setState({ loading: false });
  }

  loadPersons = async () => {
    try {
      const response = await api.get('/personas');
      this.setState({ persons: response.data });
    } catch (error) {
      console.error('Error al cargar personas', error);
    }
  };

  addPerson = async (newPerson) => {
    try {
      const response = await api.post('/personas', newPerson);
      this.setState((prevState) => ({
        persons: [...prevState.persons, response.data],
      }));
    } catch (error) {
      console.error('Error al agregar persona', error);
    }
  };

  updatePerson = async (updatedPerson) => {
    try {
      await api.put(`/personas/${updatedPerson.id}`, updatedPerson);
      this.setState((prevState) => ({
        persons: prevState.persons.map(person =>
          person.id === updatedPerson.id ? updatedPerson : person
        ),
      }));
    } catch (error) {
      console.error('Error al actualizar persona', error);
    }
  };

  deletePerson = async (id) => {
    try {
      await api.delete(`/personas/${id}`);
      this.setState((prevState) => ({
        persons: prevState.persons.filter(person => person.id !== id),
      }));
    } catch (error) {
      console.error('Error al eliminar persona', error);
    }
  };

  setLogged = (logged) => {
    this.setState({ logged });
  };

  setEditingPerson = (editingPerson) => {
    this.setState({ editingPerson });
  };

  render() {
    if (this.state.loading) {
      return <p>Cargando...</p>;
    }

    if (!this.state.logged) {
      return (
        <div>
          <RegisterForm />
          <LoginForm setLogged={this.setLogged} />
        </div>
      );
    }

    return (
      <div>
        <h2>Gestión de Personas</h2>
        <PersonForm
          addPerson={this.addPerson}
          updatePerson={this.updatePerson}
          editingPerson={this.state.editingPerson}
        />
        <Personas
          persons={this.state.persons}
          setEditingPerson={this.setEditingPerson}
          deletePerson={this.deletePerson}
        />
      </div>
    );
  }
}

export default App;
