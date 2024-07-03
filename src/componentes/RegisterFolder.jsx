import React, { useState } from 'react';
import api from '../api';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dni, setDni] = useState('');

  return (
    <form onSubmit={async (e) => {
      e.preventDefault();
      try {
        await api.post('/register', { name, email, dni });
        alert('Usuario registrado con éxito');
      } catch (error) {
        console.error('Error al registrar usuario', error);
      }
    }}>
      <h2>Registro</h2>
      <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="text" placeholder="DNI" value={dni} onChange={(e) => setDni(e.target.value)} required />
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RegisterForm;
