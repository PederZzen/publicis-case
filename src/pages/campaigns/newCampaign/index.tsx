import { Form } from "antd";
import React from "react";

const NewCampaign = () => {
  return (
    <Form>
      <div>
        <input type="text" placeholder=" " id="name" />
        <label htmlFor="name">*Name of venue</label>
      </div>
    </Form>
  );
};

export default NewCampaign;
