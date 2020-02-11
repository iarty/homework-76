import { CLEAR_ERROR, FETCH_MESSAGES_SUCCESS, SET_ERROR } from "./actionsType";
import axiosChat from "../../axiosChat";

export const postMsg = data => {
  return async dispatch => {
    dispatch({ type: CLEAR_ERROR });
    try {
      await axiosChat.post("/messages", data);
    } catch (error) {
      const payload = error.response.data;
      dispatch({ type: SET_ERROR, payload });
    }
  };
};

export const getMessages = datetime => {
  const url = datetime ? `/messages?datetime=${datetime}` : "/messages";
  return async dispatch => {
    try {
      const response = await axiosChat.get(url);
      if (response.data.length) {
        dispatch({ type: FETCH_MESSAGES_SUCCESS, payload: response.data });
      }
    } catch (error) {
      const payload = error.response.data;
      dispatch({ type: SET_ERROR, payload });
    }
  };
};
