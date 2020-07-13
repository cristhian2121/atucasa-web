import React, { useState } from 'react';
import { useSnackbar } from 'notistack';

import { CreateClient, CreateShop } from "../components";
import { SaveClientServer } from "../services/Clients-Service"

export const ClientContainer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [fistStep, setFirstStep] = useState(true)

  const [dataClient, setDataClient] = useState({})
  const [dataShop, setDataShop] = useState({})

  const handleSaveClient = (dataClient) => {
    setDataClient(dataClient);
    // saveClient()
    setFirstStep(false);
  };
  const handleSaveShop = (dataShop) => {
    setDataShop(dataShop)

    /* Method for saving client with shop */
    saveClient()
  };
  const saveClient = async () => {
    try {
      const response = await SaveClientServer(dataClient);
      console.log('response: ', response);
    }
    catch (e) { 
      let resp = e.response
      console.log('resp: ', resp);
      (e && resp.data.username) && enqueueSnackbar(resp.data.username, { variant: 'error' })
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
  )
}