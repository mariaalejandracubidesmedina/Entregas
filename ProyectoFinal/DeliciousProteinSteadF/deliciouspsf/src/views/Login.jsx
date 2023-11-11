import './Login.css'
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [pass, setPass] = useState('');
  const [correo, setCorreo] = useState('');

  const getCorreo = (evt) => {
    setCorreo(evt.target.value);
    console.log(correo);
  };

  const getPass = (evt) => {
    setPass(evt.target.value);
    console.log(pass);
  };

  const handleRegister = async (evt) => {
        evt.preventDefault();

        // Agrega tu lógica para enviar los datos al servidor aquí
        axios({
            url : "http://localhost:3000/users/login",
            method :"POST",
            data :{
                correo: correo,
                password: pass
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error)
        })
    }
  return (
    <div className="Login">
      <form onSubmit={handleRegister}>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tu correo electrónico
          </label>
          <input
            onChange={getCorreo}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="nombre@flowbite.com"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Tu contraseña
          </label>
          <input
            onChange={getPass}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Recordarme
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Login;
