import React, { useState, useRef } from "react";
import {
  ValidatorForm,
  TextValidator,
  SelectValidator,
} from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

import { FORM_EMAIL, FORM_REQUIRED, FORM_MAX } from "../../mocks";

export const CreateProduct = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(1);
  const form = useRef("");

  const categories = [
    {
      id: 1,
      name: "Aseo",
    },
    {
      id: 2,
      name: "Lacteos",
    },
  ];

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // console.log("category", category);
  };

  const handleClick = () => {
    console.log("category", category);
  };

  return (
    <>
      {console.log("SISISI")}
      <div>Agrega tu producto</div>
      <div className="col-12 px-0 d-flex">
        <div className="col-md-2"></div>

        <div className="col-md-8">
          <ValidatorForm
            ref={form}
            onSubmit={handleSubmit}
            onError={(errors) => console.log(errors)}
          >
            <TextValidator
              label="Nombre del producto"
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
              validators={["required", "maxStringLength:30"]}
              errorMessages={[FORM_REQUIRED, `${FORM_MAX} 30`]}
            />
            <br />
            <TextValidator
              label="Precio"
              onChange={(e) => setPrice(e.target.value)}
              name="price"
              value={price}
              validators={["required", "maxStringLength:30"]}
              errorMessages={[FORM_REQUIRED, `${FORM_MAX} 30`]}
            />
            <br />
            <SelectValidator
              label="Categoria"
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              value={category}
              validators={["required"]}
              errorMessages={[FORM_REQUIRED]}
            >
              {categories.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </SelectValidator>
            <br />
            <TextValidator
              label="Email"
              onChange={handleChange}
              name="email"
              value={email}
              validators={["required", "isEmail"]}
              errorMessages={[FORM_REQUIRED, FORM_EMAIL]}
            />
            <br />
            <Button type="submit" onClick={handleClick}>Submit</Button>
          </ValidatorForm>
        </div>

        <div className="col-md-2"></div>
      </div>
    </>
  );
};
