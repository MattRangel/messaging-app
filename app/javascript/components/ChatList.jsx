import { useState, useEffect } from "react";
import { getChatsList } from "@/helpers/messagingAPI";

function ChatList() {
  const [chats, setChats] = useState([]);

  const updateChats = () => {
    getChatsList().then(setChats);
  }
  useEffect(() => updateChats(), []);

  return (
    <ul>
      {chats.map((chat) => (
        <li key={chat.id}>{chat.name || "Unnamed Chat"}</li>
      ))}
    </ul>
  );

}

export default ChatList;
