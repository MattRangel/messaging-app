import { useState, useEffect, useContext, useRef } from "react";
import { getChat } from "@/helpers/messagingAPI";
import { useLoaderData } from "react-router";
import Message from "@/components/Message";
import SendMessage from "@/components/SendMessage";
import styles from "./Chat.module.css";

function Chat({chatID}) {
  const messages = useRef();
  const { currentUser } = useLoaderData();
  const [chatObject, setChatObject] = useState({
    messages: [],
    users: []
  });
  const updateChatObject = () => {
    !isNaN(chatID) && getChat(chatID).then(setChatObject);
  }
  useEffect(updateChatObject, [chatID]);
  useEffect(() => { messages.current.lastElementChild?.scrollIntoView() }, [chatObject]);

  const getUser = (id) => (
    chatObject.users.find(usr => usr.id == id)
  );

  const appendMessage = (message) => {
    setChatObject(chatObject => ({
      ...chatObject,
      messages: [
        ...chatObject.messages,
        message
      ]
    }));
  }

  return (
    <div className={styles.chat}>
      <h2>Now viewing chat ID: {chatObject?.id} Name: {chatObject?.name}</h2>
      <div className={styles.messages} ref={messages}>
        {chatObject.messages.map((message) => (
          <div
            className={`
              ${styles.message}
              ${(currentUser?.id == message.user_id) ? styles["from-self"] : ""}
            `}
            key={message.id}
          >
            <Message
              text={message.text}
              user={getUser(message.user_id)}
              time={message.created_at}
            />
          </div>
        ))}
      </div>
      <SendMessage chatID={chatID} onSent={appendMessage}/>
    </div>
  );
}

export default Chat;
