import { useState, useEffect } from "react";
import { getChatsList } from "@/helpers/messagingAPI";
import styles from "./ChatList.module.css";

function ChatList({activeChatID}) {
  const [chats, setChats] = useState([]);

  const updateChats = () => {
    getChatsList().then(setChats);
  }
  useEffect(() => updateChats(), []);

  return (
    <ul>
      {chats.map((chat) => (
        <li
          key={chat.id}
          className={chat.id == activeChatID && styles.active}
        >
          {chat.name || "Unnamed Chat"}
        </li>
      ))}
    </ul>
  );

}

export default ChatList;
