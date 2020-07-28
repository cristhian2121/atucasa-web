import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Divider from '@material-ui/core/Divider';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { getGroupsService } from "../../services/Clients-Service"
import { FORM_EMAIL, FORM_REQUIRED, FORM_MAX, FORM_MAXVAL } from "../../mocks";


export const CreateClient = (
  props
) => {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactPhone, setContactPhone] = useState([]);
  const [documentId, setDocumentId] = useState("");
  const [password, setPassword] = useState("")
  const [permission, setPermission] = useState([1]);
  const [permissions, setPermissions] = useState([])
  const [showPassword, setShowPassword] = useState(false)
  const form = useRef("");

  useEffect (() => {
    /* Method mounted in functions */
    getPermissions()
  },[permission]);
  const branches = [
    {
      id: 1,
      name: "Sede uno",
    },
    {
      id: 2,
      name: "Sede dos",
    },
  ];
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async () => {
    let data = generateData()

    props.save(data)
  };
  const getPermissions = async () => {
    try {
      let response = await getGroupsService()
      let resp = response.data
      resp = resp.filter(_ => _.name != 'admin')
      // upload options for field permissions
      setPermissions(resp)
    } catch (e) { console.log('error create product', e) }
  };  
  const clearForm = (event) => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setContactPhone("")
    setDocumentId("")
    setPermission("")
  };
  const generateData = () => {
    /* generate data */
    let elements = document.getElementById('clientForm').elements;
    let data = {};    
    for (let item of elements) {
      if (item.name) {
        data[item.name] = item.value;
      }
    }
    data['groups'] = [ data['groups'] ]

    return data
  };

  return (
    <>
      <div className="banner-top">
        <div className="container">
          <h3 >Registrate</h3>
          <h4><Link to="/">Inicio</Link><label>/</label>Registrate</h4>
          <div className="clearfix"> </div>
        </div>
      </div>
      <div className="container col-12 d-flex">
        <div className="col-12">
          <ValidatorForm
            id="clientForm"
            ref={form}
            onSubmit={handleSubmit}
            className="col-12"
          >
            <TextValidator
              label="Nombre(s)"
              onChange={(e) => setFirstName(e.target.value)}
              name="first_name"
              value={firstName}
              validators={["required", "maxStringLength:30"]}
              errorMessages={[FORM_REQUIRED, `${FORM_MAX} 30`]}
              className="col-md-6"
            />
            <TextValidator
              label="Apellido(s)"
              onChange={(e) => setLastName(e.target.value)}
              name="last_name"
              value={lastName}
              validators={["required", "maxStringLength:30"]}
              errorMessages={[FORM_REQUIRED, `${FORM_MAX} 30`]}
              className="col-md-6"
            />
            <TextValidator
              label="Correo electrónico"
              onChange={handleChange}
              name="username"
              value={email}
              validators={["required", "isEmail"]}
              errorMessages={[FORM_REQUIRED, FORM_EMAIL]}
              className="col-md-6"
            />
            <TextValidator
              label="Teléfono de contacto"
              onChange={(e) => setContactPhone(e.target.value)}
              name="contact_phone"
              value={contactPhone}
              type="number"
              validators={["maxStringLength:10"]}
              errorMessages={[`${FORM_MAX} 10`]}
              className="col-md-6"
            />
            <TextValidator
              label="Documento de identificación"
              onChange={(e) => setDocumentId(e.target.value)}
              name="document_id"
              value={documentId}
              validators={["maxStringLength:20"]}
              errorMessages={[`${FORM_MAX} 20`]}
              className="col-md-6"
            />
            <TextValidator
              label="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
              type={showPassword ? "text" : "password"}
              validators={["required"]}
              errorMessages={[FORM_REQUIRED]}
              className="col-md-6"
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
            />
            <SelectValidator
              label="Rol"
              onChange={(e) => setPermission(e.target.value)}
              name="groups"
              value={permission}
              validators={["required"]}
              errorMessages={[FORM_REQUIRED]}
              className="col-md-6"
            >
              {permissions.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </SelectValidator>
            <div className="col-md-12 titleSection">
              <Button type="submit" disabled={isSending} color="primary" variant="contained">Guardar</Button>
              <Button onClick={clearForm} variant="contained">Cancelar</Button>
            </div>
          </ValidatorForm>
        </div>
      </div>
    </>
  );
};
