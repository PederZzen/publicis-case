import { useEffect, useState } from "react";
import { ApiClient, Campaign } from "../../api-client";
import Loader from "../../components/loader";
import { Wrapper } from "./style";
import TableComponent from "../../components/table";
import { ColumnsType } from "antd/es/table";
import { Modal } from "antd";
import NewCampaign from "./newCampaign";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const apiClient = new ApiClient();
        const campaignData = await apiClient.requestCampaigns();
        setCampaigns(campaignData);
        setIsLoading(false);
        console.log(campaignData);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };
    fetchCampaigns();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: ColumnsType<Campaign> = [
    {
      title: "Campaign",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Client",
      dataIndex: "client",
      key: "client",
      render: (client) => <p>{client.name}</p>,
      sorter: (a, b) => a.client.name.localeCompare(b.client.name),
    },
    {
      title: "Campaign start",
      dataIndex: "startDate",
      key: "startDate",
      sorter: (a, b) => a.startDate.localeCompare(b.startDate),
    },
    {
      title: "Campaign end",
      dataIndex: "endDate",
      key: "endDate",
      sorter: (a, b) => a.endDate.localeCompare(b.endDate),
    },
    {
      title: "Campaign manager",
      key: "campaignManager",
      render: (campaign) => (
        <>
          <p>{campaign.campaignManager.name}</p>
          <p>{campaign.campaignManager.email}</p>
        </>
      ),
      sorter: (a, b) =>
        a.campaignManager.name.localeCompare(b.campaignManager.name),
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "budget",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.budget - b.budget,
    },
  ];

  const data: Campaign[] = campaigns;

  if (isLoading) {
    return <Loader />;
  }

  if (!campaigns) {
    return <p>No data...</p>;
  }

  return (
    <Wrapper>
      <h1>Campaigns</h1>
      <button onClick={showModal} className="button">
        Add campaign
      </button>
      <Modal
        title="Add campaign"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <NewCampaign />
      </Modal>
      <TableComponent data={data} columns={columns} />
    </Wrapper>
  );
};

export default Campaigns;
