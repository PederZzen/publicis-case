import { useEffect, useState } from "react";
import { ApiClient, Client } from "../../api-client";
import Loader from "../../components/loader";
import { ColumnsType } from "antd/es/table";
import TableComponent from "../../components/table";

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

  const columns: ColumnsType<Client> = [
    {
      title: "Client",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Campaign manager",
      key: "campaignManager",
      render: (client) => (
        <>
          <p>{client.defaultCampaignManager.name}</p>
          <p>{client.defaultCampaignManager.email}</p>
        </>
      ),
      sorter: (a, b) =>
        a.defaultCampaignManager.name.localeCompare(
          b.defaultCampaignManager.name
        ),
    },
  ];

  const data: Client[] = clients;

  if (isLoading) {
    return <Loader />;
  }

  if (!clients) {
    return <p>No data...</p>;
  }

  return (
    <div>
      <h1>Clients</h1>
      <TableComponent data={data} columns={columns} />
    </div>
  );
};

export default Clients;
