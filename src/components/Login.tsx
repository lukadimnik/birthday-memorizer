import { useState } from 'react';
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here, you can add your logic to authenticate the user with the entered username and password
    // For a basic example, we'll just log the values to the console
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
            className='input-field'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            name='password'
            className='input-field'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='submit-button'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
