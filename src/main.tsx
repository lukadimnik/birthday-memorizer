import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login.tsx';
import Whoopsie from './components/Whoopsie.tsx';
import { AuthProvider, RequireAuth } from 'react-auth-kit';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth loginPath='/login'>
        <App />
      </RequireAuth>
    ),
    errorElement: <Whoopsie />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider
      authType={'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === 'https:'}
    >
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
