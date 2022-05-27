/* 
Base Login Page, front-end
depends on: LOGIN mutation

assigned to:
*/

// import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/homepage">
          Mental Health Check
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const theme = createTheme();

export default function Login() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
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
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}


// function Login(props) {
//     const [formState, setFormState] = useState({ email: '', password: '' });
//     const [login, { error }] = useMutation(LOGIN);

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const mutationResponse = await login({
//                 variables: { email: formState.email, password: formState.password },
//             });
//             console.log(mutationResponse)
//             const token = mutationResponse.data.login.token;
//             Auth.login(token);
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormState({
//             ...formState,
//             [name]: value,
//         });
//     };

//     return (
//         <div className="container my-1">
//             <Link to="/signup">← Go to Signup</Link>

//             <h2>Login</h2>
//             <form onSubmit={handleFormSubmit}>
//                 <div className="flex-row space-between my-2">
//                     <label htmlFor="email">Email address:</label>
//                     <input
//                         placeholder="youremail@test.com"
//                         name="email"
//                         type="email"
//                         id="email"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div className="flex-row space-between my-2">
//                     <label htmlFor="pwd">Password:</label>
//                     <input
//                         placeholder="******"
//                         name="password"
//                         type="password"
//                         id="pwd"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 {error ? (
//                     <div>
//                         <p className="error-text">The provided credentials are incorrect</p>
//                     </div>
//                 ) : null}
//                 <div className="flex-row flex-end">
//                     <button type="submit">Submit</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Login;
