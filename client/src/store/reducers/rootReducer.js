import {
  FETCH_MESSAGES_SUCCESS,
  POST_MESSAGE_SUCCESS,
  SET_ERROR,
} from "../actions/actionsType";

const initialState = {
  messages: [],
  lastMessageDatetime: {},
  error: null,
  loading: false
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.error };
    case FETCH_MESSAGES_SUCCESS:
      const lastMessageDate =
        action.payload[action.payload.length - 1].datetime;
      return {
        ...state,
        error: null,
        messages: [...state.messages, ...action.payload],
        lastMessageDate,
        loading: false
      };
    case POST_MESSAGE_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};
