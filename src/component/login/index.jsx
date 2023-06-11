import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

const Auth0Authentication = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div>
      {isAuthenticated ? (
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      )}
    </div>
  );
};

export default Auth0Authentication;
