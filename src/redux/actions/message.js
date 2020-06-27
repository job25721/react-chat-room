import { SET_MESSAGE, SET_RESPONSE, HANDLE_MESSAGE } from "./types";
import socketIOClient from "socket.io-client";

import store from "../store";
const endpoint = "http://localhost:4001";
export function scrollToBottom() {
  setTimeout(() => {
    const chatBox = document.querySelector(".chat-box");
    chatBox.scrollTo({
      top: chatBox.scrollHeight,
      behavior: "smooth",
    });
  }, 100);
}
export const handleMessage = (msg) => (dispatch) => {
  dispatch({
    type: HANDLE_MESSAGE,
    payload: msg,
  });
};
export const sentMessage = () => (dispatch) => {
  if (store.getState().message.messageInput !== "") {
    dispatch({
      type: SET_RESPONSE,
      payload: false,
    });
    dispatch({
      type: SET_MESSAGE,
      payload: {
        msg: store.getState().message.messageInput,
        position: "right",
      },
    });
    socketIOClient(endpoint).emit(
      "sent-message",
      store.getState().message.messageInput
    );
    dispatch({
      type: HANDLE_MESSAGE,
      payload: "",
    });
    scrollToBottom();
  }
};
export const setResponseMessage = () => (dispatch) => {
  socketIOClient(endpoint).on("new-message", (newMsg) => {
    if (store.getState().message.messageResponse === true) {
      dispatch({
        type: SET_MESSAGE,
        payload: {
          msg: newMsg,
          position: "left",
        },
      });
      scrollToBottom();
    } else {
      dispatch({
        type: SET_RESPONSE,
        payload: true,
      });
    }
  });
};
