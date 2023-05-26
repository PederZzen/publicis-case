import { useEffect, useState } from "react";
import { ApiClient, Campaign } from "../../api-client";
import Loader from "../../components/loader";

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return <Loader />;
  }

  if (!campaigns) {
    return <p>No data...</p>;
  }

  return (
    <div>
      <h1>Campaigns</h1>
      <div>
        {campaigns.map((campaign, idx) => {
          return (
            <div key={idx}>
              <div>
                <p>{campaign.name}</p>
              </div>
              <div>
                <p>{campaign.client.name}</p>
              </div>
              <div>
                <p>{campaign.startDate}</p>
              </div>
              <div>
                <p>{campaign.endDate}</p>
              </div>
              <div>
                <p>{campaign.campaignManager.name}</p>
                <p>{campaign.campaignManager.email}</p>
              </div>
              <div>
                <p>{campaign.budget}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Campaigns;
