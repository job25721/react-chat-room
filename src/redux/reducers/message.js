import { SET_MESSAGE, SET_RESPONSE, HANDLE_MESSAGE } from "../actions/types";
const initialState = {
  messages: [],
  messageResponse: true,
  messageInput: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_MESSAGE: {
      return {
        ...state,
        messageInput: action.payload,
      };
    }
    case SET_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case SET_RESPONSE: {
      return {
        ...state,
        messageResponse: action.payload,
      };
    }
    default:
      return state;
  }
};
