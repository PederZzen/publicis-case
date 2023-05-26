import { DatePicker, Form, InputNumber } from "antd";
import Input from "antd/es/input/Input";
import React from "react";

const NewCampaign = () => {
  const { RangePicker } = DatePicker;
  return (
    <Form>
      <Input placeholder="Campaign" size="large" />
      <Input placeholder="Client" size="large" />
      <RangePicker size="large" style={{ width: "100%" }} />
      <InputNumber placeholder="Budget" min={0} size="large" />
    </Form>
  );
};

export default NewCampaign;
