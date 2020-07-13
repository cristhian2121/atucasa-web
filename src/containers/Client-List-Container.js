import React, { useEffect, useState } from "react";
import { getClientsService } from "../services/Client-Service";
import { ClientList } from "../components/Clients";
// redux
import { connect } from "react-redux";
import { getClients } from "../actions/client-actions";

export const ClientContainerListComponent = ({ getClients }) => {
  const [clients, setclients] = useState([]);

  useEffect(() => {
    getClient();
  }, []);

  const getClient = async() => {
    console.log("Pre");
    await getClients();
    console.log("Pos");
    // const clientsRaw = await getClientsService();
    // console.log("clientsRaw: ", clientsRaw);
    // const clientsList = clientsRaw.statusText == "OK" ? clientsRaw.data : [];
    // console.log('clientsList: ', clientsList);
    // setclients(clientsList);
  };

  return (
    <div className="col-12">
      <ClientList clients_={clients} clientsCount_={clients.length} />
    </div>
  );
};

const mapDispatchToProps = {
  getClients,
};

const ClientContainerList = connect(
  null,
  mapDispatchToProps
)(ClientContainerListComponent);
export { ClientContainerList };
