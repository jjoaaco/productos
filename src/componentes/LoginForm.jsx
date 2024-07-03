import React, { useState } from 'react';
import api from '../api';

const LoginForm = ({ setLogged }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={async (e) => {
      e.preventDefault();
      try {
        const response = await api.post('/login', { email, password });
        localStorage.setItem('token', response.data.token);
        setLogged(true);
      } catch (error) {
        console.error('Error al iniciar sesión', error);
      }
    }}>
      <h2>Iniciar Sesión</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default LoginForm;
