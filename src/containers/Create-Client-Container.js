import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useHistory } from "react-router-dom";

import { CreateClient, CreateShop } from "../components";
import { SaveClientServer, SaveStoreServer } from "../services/Clients-Service"

export const CreateClientContainer = () => {
  let history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [fistStep, setFirstStep] = useState(true)
  const [dataClient, setDataClient] = useState({})
  // const [dataShop, setDataShop] = useState({})

  const handleSaveClient = (dataClient) => {
    setDataClient(dataClient);
    setFirstStep(false);
  };
  const handleSaveShop = (dataShop) => {
    // setDataShop(dataSho)

    /* Method for saving client with store */
    saveClient(dataShop)
  };
  const saveClient = async (dataShop) => {
    try {
      const resp = await SaveClientServer(dataClient);
      const response = resp.data

      let dataStore = dataShop
      dataStore['user'] = response.id
      // setDataShop(dataStore)
      saveStore(dataStore)
    }
    catch (e) { 
      let resp = e.response
      (e && resp.data.username) && enqueueSnackbar(resp.data.username, { variant: 'error' })
    }
  };
  const saveStore = async (dataStore) => {
    try {
      const resp = await SaveStoreServer(dataStore);
      enqueueSnackbar('El usuario se creo con éxito, ya puede iniciar sesión en la tienda.', { variant: 'success' })
      history.push('/')
    }
    catch (e) { 
      let resp = e.response
      (e && resp.data) && enqueueSnackbar(resp.data, { variant: 'error' })
    }
  }

  return(
    <div>
      {fistStep ?
      <CreateClient save={handleSaveClient}/>
      :
      <CreateShop save={handleSaveShop} />
      }
    </div>
  );
};
