import { useState } from 'react';
import { login } from '../services/login';
import '../styles/form.css'

export const Form = () => {

  const [error, setError] = useState(null);
  const [successLoged, setSuccessLogin] = useState(false);

  const sendRequest = async (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const response = await login(data);
    console.log(response);
    if (response.error) {
      setError(response.message)
      setSuccessLogin(false)
    }
    else {
      setError(null)
      setSuccessLogin(true)
    }
  }

  return (
    <form className="form-card" onSubmit={sendRequest}>
      <h1>Login</h1>
      <input name="user" type="text" placeholder='Usuario...' />
      <input name="password" type="password" placeholder='********' />
      <input className='submit-button' type="submit" />
      {
      successLoged && (
        <span id="correct">Ingreso Correctamente</span>
      )
    }
    {
      error && (
        <span id="spanError">{error}</span>
      )
    }
    </form>
  )
}