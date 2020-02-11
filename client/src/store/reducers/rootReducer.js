import {
  CLEAR_ERROR,
  FETCH_MESSAGES_SUCCESS,
  SET_ERROR
} from "../actions/actionsType";

const initialState = {
  messages: [],
  lastMessageDatetime: {},
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ERROR:
      return { ...state, error: null };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case FETCH_MESSAGES_SUCCESS:
      return {
        ...state,
        error: null,
        messages: [...state.messages, ...action.payload],
        lastMessageDate: action.payload[action.payload.length - 1].datetime
      };
    default:
      return state;
  }
};
