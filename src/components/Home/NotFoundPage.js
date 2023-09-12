import React from "react";

import { Alert, Space } from "antd";

const NotFoundPage = () => {
  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <Space
        direction="vertical"
        style={{
          width: "100%",
          height: "200px",
          marginTop: "40px",
        }}
      >
        <Alert
          style={{
            height: "100%",
            fontSize: "20px",
          }}
          type="error"
          message="Not Found Page"
          banner
        />
      </Space>
    </div>
  );
};

export default NotFoundPage;
