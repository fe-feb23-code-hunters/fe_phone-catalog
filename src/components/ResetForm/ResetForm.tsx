import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import { useState } from 'react';
import Modal from '../Modal';

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link to="/" className="link">
        NICE👌GADGETS
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}

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
      fontSize: 14,
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

export default function ResetForm() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [email, setEmail] = useState('');

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/auth');
  };

  const validateEmail = (em: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(em);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEmailValid = validateEmail(email);

    if (!isEmailValid) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
      setShowModal(true);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              width: 300,
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
              Reset password
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
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

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                id="form-button"
              >
                Reset password
              </Button>
            </Box>

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Container>
      </ThemeProvider>

      {showModal && (
        <Modal
          title="Password successfully reset"
          onClose={() => handleCloseModal()}
          showModal={showModal}
          description="Check your email for the new password!"
          navigation="/auth"
        />
      )}
    </>
  );
}
