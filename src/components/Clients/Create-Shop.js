import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

import { FORM_EMAIL, FORM_REQUIRED, FORM_MAX, FORM_MAXVAL } from "../../mocks";


export const CreateClient = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState(false);
  const [categoryStore, setCategoryStore] = useState("");
  const [logo, setLogo] = useState("");
  const [description, setDescription] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState([1]);
  const [contactName, setContactName] = useState([])
  const form = useRef("");

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

    // try {
    //   let response = await SaveProductService(data)
    //   clearForm()
    // } catch (e) { console.log('error create product', e) }
  };
  const getPermissions = async () => {
    try {
      let response = await getCategoryProductsService()
      let resp = response.data
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
    /* generate data save product */
    let elements = document.getElementById('productsForm').elements;
    let data = {};    
    for (let item of elements) {
      if (item.name) {
        data[item.name] = item.value;
      }
    }

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
            id="productsForm"
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
              validators={["maxNumber:10"]}
              errorMessages={[`${FORM_MAXVAL} 10`]}
              className="col-md-6"
            />
            <TextValidator
              label="Documento de identificación"
              onChange={(e) => setDocumentId(e.target.value)}
              name="document_id"
              value={documentId}
              validators={["maxNumber:20"]}
              errorMessages={[`${FORM_MAXVAL} 20`]}
              className="col-md-6"
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
              {branches.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </SelectValidator>
            <Divider component="li" variant="inset" />
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
