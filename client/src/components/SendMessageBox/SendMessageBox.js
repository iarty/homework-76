import React, { useState } from "react";
import classes from "./SendMessageBox.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useDispatch } from "react-redux";
import { postMsg } from "../../store/actions/actions";

const SendMessageBox = () => {
  const dispatch = useDispatch();
  const [messageData, setMessageData] = useState({
    author: "",
    message: ""
  });

  const sendMsg = async event => {
    event.preventDefault();
    dispatch(postMsg(messageData));
    setMessageData({
      author: "",
      message: ""
    });
  };

  return (
    <div className={classes.SendMessageBox}>
      <form onSubmit={sendMsg} className={classes.Form}>
        <Input
          type="text"
          name="author"
          label
          onChange={event =>
            setMessageData({
              ...messageData,
              [event.target.name]: event.target.value
            })
          }
          value={messageData.author}
        />
        <div className={classes.sendMsg}>
          <Input
            placeholder="Type a message"
            type="text"
            name="message"
            onChange={event =>
              setMessageData({
                ...messageData,
                [event.target.name]: event.target.value
              })
            }
            value={messageData.message}
          />
          <Button />
        </div>
      </form>
    </div>
  );
};

export default SendMessageBox;
