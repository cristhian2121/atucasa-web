import React, { useState, useRef, useEffect } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { SnackbarProvider, useSnackbar } from 'notistack';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { LoginService } from "./../../services/auth/auth-service";
import { useHistory } from "react-router-dom";
// import Copyright from '../../components/common/copyright'
// import Logo from '../../static/logo_pop_litle.png'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const Login = () => {

  return (
    <SnackbarProvider maxSnack={3}>
      <IntegrationNotistack />
    </SnackbarProvider>
  );
}

function IntegrationNotistack() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false)
  let history = useHistory();

  const login = async (event) => {
    event.preventDefault()
    let data = generateData()
    console.log('data: ', data);

    let response = await LoginService(data)
    console.log('response: ', response);

    if (response) {
      enqueueSnackbar(response['detail'], { variant: 'error' })
    } else history.push('/home/')
  }

  const generateData = () => {
    const elements = document.getElementById('loginForm').elements;
    let data = {};
    data.username = elements.username.value.trim()
    data.password = elements.password.value.trim()
    return data
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          <img src={""} className="image-logo-pdf" />
        </Typography>
        <Typography component="h1" variant="h5">
          Ingresa tus credenciales
        </Typography>
        <form id="loginForm" className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Correo electrónico"
            name="username"
            autoComplete="username"
            autoFocus
            onKeyPress={(event) => {
              (event.key === "Enter") && login(event)
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            onKeyPress={(event) => {
              (event.key === "Enter") && login(event)
            }}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={login}
          >
            Ingresar
          </Button>
        </form>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </Container>
  );
}