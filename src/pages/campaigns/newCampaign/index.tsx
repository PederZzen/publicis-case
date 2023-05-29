import { DatePicker, Form, InputNumber } from "antd";
import Input from "antd/es/input/Input";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Loader from "../../../components/loader";
import { ClipLoader, PacmanLoader, SyncLoader } from "react-spinners";
import { colors } from "../../../utils/constants";

interface NewCampaignProps {
  onCloseModal: () => void;
}

const NewCampaign: React.FC<NewCampaignProps> = ({ onCloseModal }) => {
  const { RangePicker } = DatePicker;
  const user = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const [submit, setSubmit] = useState(false);

  const submitData = (data: any) => {
    const startDate = dayjs(data.date[0].$d).format("YYYY-MM-DD");
    const endDate = dayjs(data.date[1].$d).format("YYYY-MM-DD");

    const campaignData = {
      campaign: data.campaign,
      client: data.client,
      startDate: startDate,
      endDate: endDate,
      campaignManager: {
        name: user,
        email: email,
      },
      budget: data.budget,
    };

    console.log(campaignData);
    setSubmit(true);
  };
  if (submit) {
    setTimeout(() => {
      onCloseModal();
      window.location.reload();
      setSubmit(false);
    }, 5000);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <p>Submitting...</p>
        <PacmanLoader size={15} color={colors.second} />
        <p>See console for data</p>
      </div>
    );
  }

  return (
    <Form onFinish={submitData}>
      <p style={{ marginBottom: "1rem" }}>{user}</p>
      <Form.Item name={"campaign"}>
        <Input placeholder="Campaign" size="large" required />
      </Form.Item>
      <Form.Item name={"client"}>
        <Input placeholder="Client" size="large" required />
      </Form.Item>
      <Form.Item name={"date"}>
        <RangePicker size="large" style={{ width: "100%" }} aria-required />
      </Form.Item>
      <Form.Item name={"budget"}>
        <InputNumber placeholder="Budget" min={0} size="large" required />
      </Form.Item>
      <Form.Item>
        <button className="button">Add campaign</button>
      </Form.Item>
      <p>* See console for data</p>
    </Form>
  );
};

export default NewCampaign;
