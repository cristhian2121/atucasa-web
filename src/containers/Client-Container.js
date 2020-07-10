import React, { useEffect, useState } from "react";
import { getClientsService } from "../services/Client-Service";
import { ClientList } from "../components/Clients";

export const ClientContainer = () => {
  const [clients, setclients] = useState([]);

  useEffect(() => {
    getClients();
  }, []);

  const getClients = async () => {
    const clientsRaw = await getClientsService();
    console.log("clientsRaw: ", clientsRaw);
    const clientsList = clientsRaw.statusText == "OK" ? clientsRaw.data : [];
    console.log('clientsList: ', clientsList);
    setclients(clientsList);
  };

  return (
    <div className="col-12">
      <ClientList clients_={clients} clientsCount_={clients.length} />
    </div>
  );
};
