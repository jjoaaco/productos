import React from 'react';

const Personas = ({ data }) => (
  <div>
    <h2>Listado de Personas</h2>
    <ul>
      {data.map(persona => (
        <li key={persona.id}>
          {persona.nombre} - {persona.apellido} - {persona.dni} - {persona.telefono}
        </li>
      ))}
    </ul>
  </div>
);

export default Personas;
