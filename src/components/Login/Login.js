import React, { useState, useRef, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { FORM_REQUIRED, FORM_MAX, ADMIN } from "../../mocks";

import { makeStyles } from "@material-ui/core/styles";
import { useSnackbar } from "notistack";
import { LoginService } from "./../../services/auth/auth-service";
import { useHistory } from "react-router-dom";

// Hooks
import { useSessionStorage } from "../../Hooks";

// Actions
import { saveUser } from "../../actions";
import { connect } from "react-redux";

// import Copyright from '../../components/common/copyright'
// import Logo from '../../static/logo_pop_litle.png'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginComponent = ({ RsaveUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [storageData, setStorageData] = useSessionStorage("android");
  let history = useHistory();
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();
  const form = useRef("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (event) => {
    let data = generateData();

    let response = await LoginService(data);

    if (response && response.groups) {
      clearForm();
      const rol = response.groups[0];
      RsaveUser(response)
      if (rol == ADMIN) history.push("/client");
      else history.push(`/store/products/${response.data.store}`);
      enqueueSnackbar(response.detail, { variant: "success" });
      return;
    }
    enqueueSnackbar(response.detail, { variant: "error" });
  };

  const generateData = () => {
    const elements = document.getElementById("loginForm").elements;
    let data = {};
    data.username = elements.username.value.trim();
    data.password = elements.password.value.trim();
    return data;
  };
  const clearForm = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <div className="">
        {/* <Typography component="h1" variant="h5">
          <img src={""} className="image-logo-pdf" />
        </Typography> */}
        <Typography component="h1" variant="h5">
          Ingresa tus credenciales
        </Typography>
        <ValidatorForm
          id="loginForm"
          ref={form}
          onSubmit={login}
          onError={(errors) => console.log("errors", errors)}
          className={classes.form}
        >
          <TextValidator
            fullWidth
            variant="outlined"
            margin="normal"
            id="username"
            name="username"
            label="Correo electrónico"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            // autoComplete="username"
            autoFocus
            validators={["required", "maxStringLength:50"]}
            errorMessages={[FORM_REQUIRED, `${FORM_MAX} 50`]}
            onKeyPress={(event) => {
              event.key === "Enter" && login(event);
            }}
          />
          <TextValidator
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            id="password"
            // autoComplete="current-password"
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
              ),
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && login(event);
            }}
            validators={["required", "maxStringLength:50"]}
            errorMessages={[FORM_REQUIRED, `${FORM_MAX} 50`]}
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
            // onClick={login}
          >
            Ingresar
          </Button>
        </ValidatorForm>
      </div>
      {/* <Box mt={8}>
        <Copyright />
      </Box> */}
    </div>
  );
};

const mapDispatchToProps = {
  RsaveUser: saveUser,
};

export const Login = connect(null, mapDispatchToProps)(LoginComponent);
