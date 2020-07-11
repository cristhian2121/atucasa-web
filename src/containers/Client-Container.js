import React, { useState } from 'react';
import { CreateClient, CreateShop } from "../components";

export const ClientContainer = () => {
  const [fistStep, setFirstStep] = useState(true)
  const [dataClient, setDataClient] = useState({})
  const [dataShop, setDataShop] = useState({})

  const handleSaveClient = (dataClient) => {
    setDataClient(dataClient);
    setFirstStep(false);
  };
  const handleSaveShop = (dataShop) => {
    setDataShop(dataShop)
  };

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