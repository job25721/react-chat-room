import React, { useEffect } from "react";
import { Layout, Input, Button, Avatar, Form } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import {
  sentMessage,
  setResponseMessage,
  handleMessage,
} from "../redux/actions/message";
import "../assets/scss/chat.scss";

const Chat = (props) => {
  useEffect(() => {
    props.setResponseMessage();
    console.log("run");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Layout className="main-chat-container">
      <h1 className="chat-room-title">Chatroom</h1>
      <div className="chat-container">
        <Layout.Header style={{ background: "whitesmoke" }}>
          Pathomporn
        </Layout.Header>
        <div className="chat-box">
          {props.Messages.map((m, id) => {
            return (
              <div
                className={`msg-container ${
                  m.position === "left" ? "bubble-left" : "bubble-right"
                }`}
                key={id}
              >
                <Avatar size="large" icon={<UserOutlined />} />
                <div className="msg-bubble">
                  <span>{m.msg}</span>
                </div>
              </div>
            );
          })}
        </div>
        <Form onFinish={props.sentMessage}>
          <Input
            size="large"
            placeholder="place your text here"
            onChange={({ target }) => props.handleMessage(target.value)}
            value={props.messageInput}
            suffix={
              <Button size="large" type="primary" onClick={props.sentMessage}>
                Send
              </Button>
            }
          />
        </Form>
      </div>
    </Layout>
  );
};

const mapStateToProps = ({ message }) => ({
  Messages: message.messages,
  messageInput: message.messageInput,
});
export default connect(mapStateToProps, {
  sentMessage,
  setResponseMessage,
  handleMessage,
})(Chat);
