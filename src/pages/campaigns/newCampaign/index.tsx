import { DatePicker, Form, InputNumber, Modal } from "antd";
import Input from "antd/es/input/Input";
import dayjs from "dayjs";
import { useState } from "react";

interface NewCampaignProps {
  onCloseModal: () => void;
}

const NewCampaign: React.FC<NewCampaignProps> = ({ onCloseModal }) => {
  const { RangePicker } = DatePicker;
  const user = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const [submit, setSubmit] = useState(false);
  const [newCampaign, setNewCampaign] = useState({});

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
    setNewCampaign(campaignData);

    setSubmit(true);
  };

  if (submit) {
    setTimeout(() => {
      onCloseModal();
      window.location.reload();
    }, 5000);
    return (
      <div>
        <p></p>
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
    </Form>
  );
};

export default NewCampaign;
