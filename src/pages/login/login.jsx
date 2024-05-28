import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías implementar la lógica de autenticación, como enviar los datos a un servidor
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (

    <div className="sectionLogin">
      <div className="containerLogin">

        <h2 className='titleLogin'>Iniciar sesión con prowess</h2>


        <form onSubmit={handleSubmit} className='formLogin'>
          <div className="mb-3">
            <input
              type="text"
              className=" inputLogin"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className=" inputLogin"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Contraseña"
            />
          </div>

          <button type="submit" className="btn-primary" >Iniciar sesión</button>
          
          <div className="text-center mt-3">
              <a href="/forgot-password" className="forgot-password-link">¿Olvidaste tu contraseña?</a>
          </div>
          <div className="text-center mt-3">
            <button type="button" className="btn-danger">Iniciar sesión con Google</button>
          </div>
          <div className="text-center mt-3">
            <p>Si no tienes cuenta, <a href="/mocc/register" className="register-link">regístrate aquí</a></p>
          </div>
        </form>
      </div>
      <span>estructura de la base de datos</span>
    </div>

      
  );
}

export default Login;
