import { useState } from 'react';
import './Login.css';
import { login } from '../api/birthdayService';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router';
import Spinner from './Spinner';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await login(username, password);
      await signIn({
        token: res.data.token,
        expiresIn: 3600,
        tokenType: 'Bearer',
        authState: {
          username: res.data.username,
        },
      });
      // wait for one second to let the token be set in the cookies
      const timeoutId = setTimeout(() => {
        setLoading(false);
        return navigate('/');
      }, 1000);
      return () => clearTimeout(timeoutId);
    } catch (error) {
      setLoading(false);
      setInvalidCredentials(true);
    }
  };

  if (loading) return <Spinner />;

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
            disabled={loading}
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
            disabled={loading}
          />
        </div>
        <button type='submit' className='submit-button'>
          Login
        </button>
      </form>
      {invalidCredentials && <div>Invalid username or password</div>}
    </div>
  );
};

export default Login;
