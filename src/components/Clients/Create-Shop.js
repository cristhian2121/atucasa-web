import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import {CategoryStoreService} from "../../services/Clients-Service"

import { FORM_EMAIL, FORM_REQUIRED, FORM_MAX } from "../../mocks";


export const CreateShop = (props) => {
  const [name, setName] = useState("");
  const [user, setUser] = useState(false);
  const [categoryStore, setCategoryStore] = useState([]);
  const [logo, setLogo] = useState("");
  const [description, setDescription] = useState([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactName, setContactName] = useState([])
  const [isSending, setIsSending] = useState(false);
  const form = useRef("");

  useEffect (() => {
    /* Method mounted in functions */
    getCategoriesStore()
  },[user]);

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
  const handleSubmit = () => {
    let data = generateData()

    props.save(data)
  };
  const getCategoriesStore = async () => {
    try {
      let response = await CategoryStoreService()
      let resp = response.data
      // upload options for field permissions
      setCategoryStore(resp)
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
    let elements = document.getElementById('shopForm').elements;
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
          <h3 >Registra tu tienda</h3>
          <h4><Link to="/">Inicio</Link><label>/</label>Registrate</h4>
          <div className="clearfix"> </div>
        </div>
      </div>
      <div className="container col-12 d-flex">
        <div className="col-12">
          <ValidatorForm
            id="shopForm"
            ref={form}
            onSubmit={handleSubmit}
            className="col-12"
          >
            <TextValidator
              label="Nombre de la tienda"
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
              validators={["required", "maxStringLength:120"]}
              errorMessages={[FORM_REQUIRED, `${FORM_MAX} 120`]}
              className="col-md-6"
            />
            <SelectValidator
              label="¿En que categoría ubicas tu tienda?"
              onChange={(e) => setCategoryStore(e.target.value)}
              name="category_store"
              value={categoryStore}
              validators={["required"]}
              errorMessages={[FORM_REQUIRED]}
              className="col-md-6"
            >
              {categoryStore.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </SelectValidator>
            <TextValidator
              label="Pega la url donde se encuentra el logo de la tienda"
              onChange={(e) => setLogo(e.target.value)}
              name="url_logo"
              value={logo}
              type="text"
              validators={["maxStringLength:240"]}
              errorMessages={[`${FORM_MAX} 240`]}
              className="col-md-6"
            />
            <TextValidator
              label="Danos una pequeña descripción"
              multiline
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              value={description}
              type="text"
              validators={["maxStringLength:500"]}
              errorMessages={[`${FORM_MAX} 500`]}
              className="col-md-6"
            />
            <TextValidator
              label="Correo electrónico"
              onChange={handleChange}
              name="email"
              value={email}
              validators={["required", "isEmail"]}
              errorMessages={[FORM_REQUIRED, FORM_EMAIL]}
              className="col-md-6"
            />
            <TextValidator
              label="Teléfono de contacto"
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              value={phone}
              validators={["maxStringLength:12"]}
              errorMessages={[`${FORM_MAX} 12`]}
              className="col-md-6"
            />
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
