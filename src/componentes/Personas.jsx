import React from 'react';

const Personas = ({ persons, setEditingPerson, deletePerson }) => (
  <div>
    <h2>Listado de Personas</h2>
    <ul>
      {persons.map(person => (
        <li key={person.id}>
          {person.nombre} - {person.email} - {person.dni}
          <button onClick={() => setEditingPerson(person)}>Editar</button>
          <button onClick={() => deletePerson(person.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Personas;
