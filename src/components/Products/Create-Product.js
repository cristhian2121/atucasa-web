import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

import { SaveProductService, getCategoryProductsService } from "../../services/Products-Service"

import { FORM_EMAIL, FORM_REQUIRED, FORM_MAX, FORM_MAXVAL } from "../../mocks";

import pepe from '../../statics/sh.jpg'

export const CreateProduct = () => {
  // const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [branch, setBranch] = useState("");
  const [description, setDescription] = useState("");
  const [presentation, setPresentation] = useState("");
  const [brand, setBrand] = useState("");
  const [units, setUnits] = useState("");
  const [discountPorcentual, setDiscountPorcentual] = useState("");
  const [image, setImage] = useState("");
  const form = useRef("");
  const [categories, setCategories] = useState([])

  useEffect (() => {
    /* Method mounted in functions */
    getCategoryProducts()
  },[category]);

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

    try {
      let response = await SaveProductService(data)
      clearForm()
    } catch (e) { console.log('error create product', e) }
  };
  const getCategoryProducts = async () => {
    try {
      let response = await getCategoryProductsService()
      let resp = response.data
      console.log('resp: ', resp);
      // upload options categories in variable
      setCategories(resp)
    } catch (e) { console.log('error create product', e) }
  };  
  const clearForm = (event) => {
    setName("")
    setPrice("")
    setCategory([1])
    setBranch("")
    setDescription("")
    setPresentation("")
    setBrand("")
    setUnits("")
    setDiscountPorcentual("")
    setImage("")
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
    data['category_product'] = [data['category_product']]
    data['discount_porcentual'] = !data['discount_porcentual'] && 0
    data['store'] = 1
    
    return data
  };

  return (
    <>
      <div class="banner-top">
        <div class="container">
          <h3 >Agregar Producto</h3>
          <h4><Link to="/">Inicio</Link><label>/</label>Agregar producto</h4>
          <div class="clearfix"> </div>
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
              label="Nombre del producto"
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
              validators={["required", "maxStringLength:50"]}
              errorMessages={[FORM_REQUIRED, `${FORM_MAX} 50`]}
              className="col-md-6"
            />
            <TextValidator
              label="Presentación del producto"
              onChange={(e) => setPresentation(e.target.value)}
              name="presentation"
              value={presentation}
              validators={["maxStringLength:50"]}
              errorMessages={[`${FORM_MAX} 50`]}
              className="col-md-6"
            />
            <TextValidator
              label="Descuento porcentual"
              onChange={(e) => setDiscountPorcentual(e.target.value)}
              name="discount_porcentual"
              value={discountPorcentual}
              type="number"
              validators={["maxNumber:100"]}
              errorMessages={[`${FORM_MAXVAL} 100`]}
              className="col-md-6"
            />
            <TextValidator
              label="Marca"
              onChange={(e) => setBrand(e.target.value)}
              name="brand"
              value={brand}
              validators={["maxStringLength:20"]}
              errorMessages={[`${FORM_MAX} 20`]}
              className="col-md-6"
            />
            <TextValidator
              label="Pegue la URL de la imagen"
              onChange={(e) => setImage(e.target.value)}
              name="url_image"
              value={image}
              validators={["maxStringLength:250"]}
              errorMessages={[`${FORM_MAX} 250`]}
              className="col-md-6"
            />       
            {/* <TextValidator
              label="Email"
              onChange={handleChange}
              name="email"
              value={email}
              validators={["required", "isEmail"]}
              errorMessages={[FORM_REQUIRED, FORM_EMAIL]}
              className="col-md-6"
            /> */}
            <TextValidator
              label="Unidades disponibles"
              onChange={(e) => setUnits(e.target.value)}
              name="units"
              value={units}
              type="number"
              validators={["required", "maxStringLength:10"]}
              errorMessages={[FORM_REQUIRED, `${FORM_MAX} 10`]}
              className="col-md-6"
            />
            <TextValidator
              label="Precio"
              onChange={(e) => setPrice(e.target.value)}
              name="price"
              value={price}
              type="number"
              validators={["required", "maxStringLength:10"]}
              errorMessages={[FORM_REQUIRED, `${FORM_MAX} 10`]}
              className="col-md-6"
            />
            <br />
            <SelectValidator
              label="Categoría"
              onChange={(e) => setCategory(e.target.value)}
              name="category_product"
              value={category}
              validators={["required"]}
              errorMessages={[FORM_REQUIRED]}
              className="col-md-6"
            >
              {categories.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </SelectValidator>
            {/* <SelectValidator
              label="Sede disponible"
              onChange={(e) => setBranch(e.target.value)}
              name="branch"
              value={branch}
              validators={["required"]}
              errorMessages={[FORM_REQUIRED]}
              className="col-md-6"
            >
              {branches.map((item) => (
                <MenuItem  key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </SelectValidator> */}
            <TextValidator
              multiline
              label="Descripción"
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              value={description}
              validators={["maxStringLength:500"]}
              errorMessages={[`${FORM_MAX} 500`]}
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
