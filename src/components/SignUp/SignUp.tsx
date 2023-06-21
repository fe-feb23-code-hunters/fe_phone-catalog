import { Link, useNavigate } from 'react-router-dom';
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
import './signUp.scss';
import { teal } from '@mui/material/colors';
import { useState } from 'react';
import {
  validateEmail, validatePassword,
} from '../../utils/validation.utils';
import Copyright from '../Copyright';

const defaultTheme = createTheme({
  typography: {
    htmlFontSize: 14,
    fontFamily: [
      'Mont',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: 32,
    },
    body1: {
      fontSize: 12,
    },
  },
  palette: {
    primary: {
      main: teal[900],
    },
    secondary: {
      main: teal[800],
    },
  },
  shape: {
    borderRadius: 0,
  },
});

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      const userData = {
        email,
        password,
      };

      // eslint-disable-next-line no-console
      console.log(userData);

      setEmail('');
      setPassword('');
      setEmailError('');
      setPasswordError('');
      navigate('/auth');
    } else {
      if (!isEmailValid) {
        setEmailError('Please enter a valid email address.');
      }

      if (!isPasswordValid) {
        setPasswordError(
          // eslint-disable-next-line max-len
          'Please enter a password between 8 and 16 characters long, containing at least one uppercase letter and one digit.',
        );
      }
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3, width: 280 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  sx={{
                    '& .MuiFormHelperText-root': {
                      fontSize: 10,
                    },
                  }}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                  error={!!emailError}
                  helperText={emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{
                    '& .MuiFormHelperText-root': {
                      fontSize: 10,
                    },
                  }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={handlePasswordChange}
                  error={!!passwordError}
                  helperText={passwordError}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  style={{
                    fontSize: '12px',
                  }}
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  // eslint-disable-next-line max-len
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2, height: '54px' }}
              id="form-button"
            >
              Sign up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/auth" className="link">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>

          <Copyright sx={{ mt: 15, fontSize: 12 }} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
