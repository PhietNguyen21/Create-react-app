import React from "react";
import { Col, Input, Row, Typography, Select, Space, Form } from "antd";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  MinusSquareOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";

import "./Questions.scss";
import TextArea from "antd/es/input/TextArea";
const Questions = () => {
  const { Title } = Typography;
  return (
    <>
      <Row>
        <Col span={24}>
          <Title level={3}>Manager Quiz</Title>
        </Col>
        <Col span={24}>
          <Space wrap size="large" style={{ width: "100%" }}>
            <Title level={4}>Select Quiz:</Title>
            <Col span={12}>
              {" "}
              {/* Thêm một Col bao bọc */}
              <Select
                size="large"
                defaultValue="Chose option"
                style={{
                  width: "100%", // Sử dụng chiều rộng 100%
                }}
                onChange={() => {}}
                options={[
                  {
                    value: "EASY",
                    label: "EASY",
                  },
                  {
                    value: "NORMAL",
                    label: "NORMAL",
                  },
                  {
                    value: "HARD",
                    label: "HARD",
                  },
                ]}
              />
            </Col>
          </Space>
        </Col>
        <Col span={24}>
          <Row gutter={16}>
            <Col className="mt-3" span={12}>
              <Form layout="vertical">
                <Form.Item
                  label={<Title level={3}>Description:</Title>}
                  size="large"
                >
                  <TextArea size="large" placeholder="Description" />
                </Form.Item>
              </Form>
            </Col>
            <Col
              span={12}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-end",
                marginBottom: 26,
              }}
            >
              <div className="form-upload">
                <label className="label-up" htmlFor="uploadIMG">
                  Upload Image
                </label>
                <input type="file" id="uploadIMG" hidden />
                <span>0 files uploaded</span>
                <div className="btn-add" style={{ marginLeft: 10 }}>
                  <PlusCircleOutlined
                    style={{ fontSize: "20px", color: "green" }}
                  />

                  <MinusCircleOutlined
                    style={{ fontSize: "20px", color: "red", marginLeft: 10 }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <div className="form-group-anwser">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                width: "90%",
              }}
            >
              <div className="form isCorrect">
                <input type="checkbox" className="form-check-input iscorrect" />
              </div>
              <div
                className="form-floating anwser-name"
                style={{ width: "90%" }}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Answer"
                />
                <label>Answers 1</label>
              </div>
            </div>

            <div className="btn-group">
              <PlusSquareOutlined
                style={{ fontSize: "20px", color: "green" }}
              />
              <MinusSquareOutlined
                style={{ fontSize: "20px", color: "red", marginLeft: 10 }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Questions;
