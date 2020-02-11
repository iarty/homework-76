import React from "react";
import classes from "./Chat.module.css";
import MessageBox from "../components/MessageBox/MessageBox";
import SendMessageBox from "../components/SendMessageBox/SendMessageBox";
import { useSelector } from "react-redux";

const Chat = () => {
  const { error } = useSelector(state => state);
  return (
    <div className={classes.Container}>
      <h1 className={classes.Headline}>Chat</h1>
      <div className={classes.ChatWrap}>
        <MessageBox />
        <SendMessageBox />
      </div>
      {error && <div className={classes.ErrorAlert}>{error.message}</div>}
    </div>
  );
};

export default Chat;
