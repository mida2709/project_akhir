import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../../store/actions';
import { TextField, Button, Grid, Typography, Box, Card } from '@mui/material';
import { useNavigate} from 'react-router-dom';
import { ButtonGoogle } from "../../components/ButtonGoogle";
import { useLocalStorage } from "../../hooks/localStorage";
import NavbarLogin from '../Styles/NavbarLogin';

export const LoginForm = () => {
  const [credentials, setCredentials] = useLocalStorage('credentials', null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') { 
      // const newCredentials = 
      //   'eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg1YmE5MzEzZmQ3YTdkNGFmYTg0ODg0YWJjYzg0MDMwMDQzNjMxODAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2ODY2Njk0MDEsImF1ZCI6IjI5ODE2MDA0MDMwNC1wZ2EyY2V0OHU4MmFzcWV2MXRicmpqOWFzYXAwNjBhby5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExMjc5ODI3MzI2NzczNDMzMTcwOSIsImVtYWlsIjoidml2aW11c2Zpcm9oODNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6IjI5ODE2MDA0MDMwNC1wZ2EyY2V0OHU4MmFzcWV2MXRicmpqOWFzYXAwNjBhby5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJ2aXZpIG11c2Zpcm9oIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBY0hUdGV6WXJMVm9aUGJVVjNQVWl6SDdkX3ZrWjdCMENMMmdtc1I0VEF6ZVE9czk2LWMiLCJnaXZlbl9uYW1lIjoidml2aSIsImZhbWlseV9uYW1lIjoibXVzZmlyb2giLCJpYXQiOjE2ODY2Njk3MDEsImV4cCI6MTY4NjY3MzMwMSwianRpIjoiMmUyMWU3OGE5MjU1MWZiMTViYjYxODI4ZTc3YmRiODNlMGNhYzljMSJ9.jJNKZYr9BOOaPvG3WPwx70IXr9ckMkjs9xII0UEPHYfbmU_buW5ecG6qZGNRRypzOdruf7BR4n-RxPFAHGmAIdMEoOTg_gxqg9GaMu0459HGsG7nI9xYVdwuZxMQAa11drhqeUDVMzY2twcvE3AXxkpWUMMsxST-k2N0gZGf2VFGRJlGrU77UQ25SLe5dowhdOxdaW88Gp_Qe6oYYRkqYdzrVBrqdVZqTgXI31tF5Aaj3ALl4vpJ47XxlEbgn8uxbVP4EWU0bpssocXLiLe2CVv_5HyZ49mH1yfogRJpdCrKsGjgEsCJFKCtfyWhOq7TjVQoIVdl9rn28IsEmJ8WOg'

      // ;
      // setCredentials(newCredentials);

      dispatch(loginSuccess());
      navigate('/admin');
    } else {
      setError('Username atau password tidak valid');
    }
  };

  useEffect(() => {
    if (credentials && isAuthenticated) {
      navigate('/home');
    }
  }, [credentials, isAuthenticated, navigate]);
  
  return (
    <div>
      <NavbarLogin />
      <Typography marginTop={10}>
        <h2>Login</h2>
      </Typography>
      <Typography variant='body1'>
        <div>(Untuk mengakses halaman admin, gunakan username = admin, password = admin)</div>
      </Typography>
      <Card variant="outlined" style={{ padding: '16px', maxWidth: '400px', margin: '0 auto', marginBottom: 70 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} marginTop={2}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} marginTop={2}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} marginTop={5}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              style={{ backgroundColor: '#2b63cf', width: '200px' }}
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} marginTop={2}>
            <hr style={{ marginTop: '10px', marginBottom: '10px' }} />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography color="error">{error}</Typography>
            </Grid>
          )}
          <Grid item xs={12} marginTop={2}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography>Atau Login Dengan: </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" justifyContent="center" marginBottom={4}>
              <ButtonGoogle />
            </Box>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default LoginForm;