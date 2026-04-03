import { useState, useEffect } from "react";
//import { **getChat**, **sendMessage** } from "@/helpers/messagingAPI";
import { getChat } from "@/helpers/messagingAPI";
import Message from "@/components/Message";
import styles from "./Chat.module.css";

function Chat({chatID}) {
  const [chatObject, setChatObject] = useState({
    messages: [],
    users: []
  });
  const updateChatObject = () => {
    !isNaN(chatID) && getChat(chatID).then(setChatObject);
  }
  useEffect(updateChatObject, [chatID]);

  const getUser = (id) => (
    chatObject.users.find(usr => usr.id == id)
  );

  return (
    <div className={styles.chat}>
      <h2>Now viewing chat ID: {chatObject?.id} Name: {chatObject?.name}</h2>
      <div>
        {chatObject.messages.map((message) => (
          <Message
            key={message.id}
            text={message.text}
            user={getUser(message.user_id)}
            time={message.created_at}
          />
        ))}
      </div>
    </div>
  );
}

export default Chat;
