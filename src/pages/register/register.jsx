import React, { useState } from 'react';
import './register.css';

function Register() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías implementar la lógica de autenticación, como enviar los datos a un servidor
    console.log('Name:', name);
    console.log('Last Name:', lastName);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="sectionRegister">
      <div className="container">
        <h2 className='titleRegister'>Registrate en Prowess</h2>
        <form onSubmit={handleSubmit} className='formRegister'>
          <div className="mb-3">
            <input
              type="text"
              className="inputRegister"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Nombre"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="inputRegister"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Apellido"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="inputRegister"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Ingresa tu Correo"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="inputRegister"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Ingresa tu Contraseña"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="inputRegister"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirma tu Contraseña"
            />
          </div>
          <button type="submit" className="btn-primary">Registrar</button>
          <div className="text-center mt-3">
            <p>¿Ya tienes una cuenta? <a href="/mocc/login" className="register-link">Ingresa aquí</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;