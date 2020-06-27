import React from "react";
import { Button, Layout, Space, Upload, Popconfirm } from "antd";

import { UploadOutlined } from "@ant-design/icons";
function App() {
  return (
    <>
      <Layout style={{ height: "100%", textAlign: "center" }}>
        <h1>Hello React(ant design)</h1>
        <div>
          <Button type="primary" onClick={() => alert("click")}>
            Hello
          </Button>
        </div>
        <Space style={{ padding: "10px" }}>
          Space (Button Group)
          <Button type="primary">Button</Button>
          <Upload>
            <Button>
              <UploadOutlined /> Click to Upload
            </Button>
          </Upload>
          <Popconfirm
            title="Are you sure delete this task?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => alert("ok")}
          >
            <Button>Confirm</Button>
          </Popconfirm>
        </Space>
      </Layout>
    </>
  );
}

export default App;
