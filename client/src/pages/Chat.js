import React from "react";
import classes from "./Chat.module.css";
import MessageBox from "../components/MessageBox/MessageBox";
import SendMessageBox from "../components/SendMessageBox/SendMessageBox";

const Chat = () => {
  return (
    <div className={classes.Container}>
      <h1 className={classes.Headline}>Chat</h1>
      <div className={classes.ChatWrap}>
        <MessageBox />
        <SendMessageBox />
      </div>
    </div>
  );
};

export default Chat;
