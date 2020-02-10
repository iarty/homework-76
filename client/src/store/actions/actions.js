import {
  FETCH_MESSAGES_SUCCESS,
  POST_MESSAGE_SUCCESS,
  SET_ERROR
} from "./actionsType";
import axiosChat from "../../axiosChat";

export const postMsg = data => {
  return async dispatch => {
    try {
      await axiosChat.post("/messages", data);
      dispatch({ type: POST_MESSAGE_SUCCESS });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };
};

export const getMessages = url => {
  return async dispatch => {
    try {
      const response = await axiosChat.get(url);
      if (response.data) {
        dispatch({ type: FETCH_MESSAGES_SUCCESS, payload: response.data });
      }
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: error });
    }
  };
};
