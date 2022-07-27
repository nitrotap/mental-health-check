// import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core'

import Copyright from '../components/Elements/Copyright';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#18344A',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '0, 10px',
  },
}));

const theme = createTheme();

function Login(props) {
  const classes = useStyles();
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const [emailState, setEmailState] = useState(false);
  const [passwordState, setPasswordState] = useState(false);
  const [pwHelper, setPwHelper] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [checked, setChecked] = useState(false);


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    formState.email = formState.email.toLowerCase();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      setEmailState(false)
      setEmailHelper('Error! No account with those credentials were found!')
    }
  };

  const handleChangePw = (event) => {
    const { name, value } = event.target;
    if (value.length > 8) {
      setPasswordState(true)
      setPwHelper('Password is valid!')
    } else {
      setPasswordState(false)
      setPwHelper('Password must be at least 8 characters.')
    }

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  const handleChangeEmail = (event) => {
    const { name, value } = event.target;
    const validEmail = new RegExp(/^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/)
    if (validEmail.test(value)) {
      setEmailState(true)
      setEmailHelper('Email is valid!')
    } else {
      setEmailState(false)
      setEmailHelper('Please enter a valid email')
    }
    setFormState({
      ...formState,
      [name]: value,
    });
  };



  return (
    <Container className={classes.container}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" sx={{
          backgroundColor: 'white', marginTop: '100px', marginBottom: '250px',
        }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChangeEmail}
                error={!emailState}
                helperText={emailHelper}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChangePw}
                error={!passwordState}
                helperText={pwHelper}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2">
                    Forgot password?
                  </Link> */}
                </Grid>
                <Grid item>
                  <Link to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </Container>
  );
}

export default Login;