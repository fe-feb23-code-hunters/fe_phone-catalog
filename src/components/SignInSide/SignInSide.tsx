import { Link, Navigate, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlined from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './signInSide.scss';
import { teal } from '@mui/material/colors';
import { useContext, useState } from 'react';
import { validateEmail } from '../../utils/validation.utils';
import Copyright from '../Copyright';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const defaultTheme = createTheme({
  typography: {
    htmlFontSize: 14,
    fontFamily: ['Mont', 'sans-serif'].join(','),
    h1: {
      fontSize: 32,
    },
    h4: {
      fontSize: 14,
    },
    body1: {
      fontSize: 12,
    },
    body2: {
      fontSize: 10,
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

const SignInSide = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { logIn, userId } = useContext(AuthContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEmailValid = validateEmail(email);

    if (isEmailValid) {
      try {
        await logIn(email, password);

        setEmail('');
        setPassword('');
        setEmailError('');

        navigate('/');
      } catch (err: any) {
        if (err?.response?.data?.includes('password')) {
          setPasswordError(err.response.data);
          setEmailError('');
        } else {
          setEmailError(err.response.data);
          setPasswordError('');
        }
      }
    } else if (!isEmailValid) {
      setEmailError('Please enter a valid email address.');
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  if (userId) {
    return <Navigate to="/profile" replace />;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={false}
          md={7}
          sx={{
            // eslint-disable-next-line max-len
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => (t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900]),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'none',
            '@media (min-width: 1024px)': {
              display: 'block',
            },
          }}
        />
        <Grid
          item
          sx={{ boxShadow: 'none', justifyContent: 'center' }}
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 5,
              mx: 7,
              mb: 1,
              mt: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: 'none',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: teal[800] }}>
              <LockOutlined />
            </Avatar>
            <Typography component="h2" variant="h1">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, boxShadow: 'none', alignItems: 'center' }}
            >
              <TextField
                sx={{
                  '& .MuiFormHelperText-root': {
                    fontSize: 10,
                  },
                }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={handleEmailChange}
                error={!!emailError}
                helperText={emailError}
              />
              <TextField
                sx={{
                  '& .MuiFormHelperText-root': {
                    fontSize: 10,
                  },
                }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
                error={!!passwordError}
                helperText={passwordError}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2, height: '54px' }}
                id="form-button"
              >
                Sign in
              </Button>
              <Grid container justifyContent="center" spacing={3}>
                <Grid item xs={5}>
                  <Link to="/reset" id="text-link">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item xs={7}>
                  <Link to="/register" id="text-link">
                    Don&apos;t have an account? Sign up
                  </Link>
                </Grid>
              </Grid>
            </Box>
            <Copyright sx={{ mt: 12, fontSize: 12 }} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignInSide;
