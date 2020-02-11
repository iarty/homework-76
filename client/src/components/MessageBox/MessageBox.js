import React, { useEffect } from "react";
import classes from "./MessageBox.module.css";
import MessageBoxItem from "./MessageBoxItem/MessageBoxItem";
import ScrollableFeed from "react-scrollable-feed";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../store/actions/actions";

const MessageBox = () => {
  const dispatch = useDispatch();
  const { messages, lastMessageDate } = useSelector(state => state);

  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (lastMessageDate) {
        dispatch(getMessages(lastMessageDate));
      }
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [lastMessageDate, dispatch]);
  return (
    <div className={classes.MessageBox}>
      <ScrollableFeed>
        {!!messages.length &&
          messages.map(message => (
            <MessageBoxItem
              key={message._id}
              datetime={message.datetime}
              author={message.author}
              message={message.message}
            />
          ))}
      </ScrollableFeed>
    </div>
  );
};

export default MessageBox;
