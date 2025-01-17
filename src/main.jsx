import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain="dev-okuugbgagnezfv5b.us.auth0.com"
    clientId="qLNYITgK5C627kgXLwbegJ8yg3diZ1qn"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
