import { useState, useEffect } from "react";
//import { **getChat**, **sendMessage** } from "@/helpers/messagingAPI";
import { getChat } from "@/helpers/messagingAPI";
import Message from "@/components/Message";

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
    <div>
      <h2>Now viewing chat ID: {chatObject?.id} Name: {chatObject?.name}</h2>
      <div>
        {chatObject.messages.map((message) => (
          <Message
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
