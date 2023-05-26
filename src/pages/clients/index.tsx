import { useEffect, useState } from "react";
import { ApiClient, Client } from "../../api-client";
import Loader from "../../components/loader";

const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const apiClient = new ApiClient();
        const clientData = await apiClient.requestClients();
        setClients(clientData);
        setIsLoading(false);
        console.log(clientData);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };
    fetchClients();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!clients) {
    return <p>No data...</p>;
  }

  return (
    <div>
      <h1>Clients</h1>
      <div>
        {clients.map((client, idx) => {
          return (
            <div key={idx}>
              <p>{client.name}</p>
              <div>
                <p>{client.defaultCampaignManager.name}</p>
                <p>{client.defaultCampaignManager.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
