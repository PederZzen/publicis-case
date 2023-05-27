import { DatePicker, Form, InputNumber } from "antd";
import Input from "antd/es/input/Input";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const NewCampaign = () => {
  const { RangePicker } = DatePicker;
  const [value, setValue] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("name");
    if (user) {
      setValue(user);
    }
  }, []);

  const submitData = (data: any) => {
    const startDate = dayjs(data.date[0].$d).format("YYYY-MM-DD");
    const endDate = dayjs(data.date[1].$d).format("YYYY-MM-DD");

    const campaignData = {
      campaign: data.campaign,
      client: data.client,
      startDate: startDate,
      endDate: endDate,
      campaignManager: data.campaignManager,
      budget: data.budget,
    };

    console.log(campaignData);
  };

  return (
    <Form onFinish={submitData}>
      <Form.Item name={"campaign"}>
        <Input placeholder="Campaign" size="large" required />
      </Form.Item>
      <Form.Item name={"client"}>
        <Input placeholder="Client" size="large" required />
      </Form.Item>
      <Form.Item name={"date"}>
        <RangePicker size="large" style={{ width: "100%" }} aria-required />
      </Form.Item>
      <Form.Item name={"campaignManager"}>
        <Input
          placeholder="Campaign manager"
          value={value}
          size="large"
          required
        />
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
