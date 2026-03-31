import { useState, useEffect } from "react";
import { getChatsList } from "@/helpers/messagingAPI";
import styles from "./ChatList.module.css";

function ChatList({activeChatID, setActiveChatID}) {
  const [chats, setChats] = useState([]);

  const updateChats = () => {
    getChatsList().then(setChats);
  }
  useEffect(() => updateChats(), []);

  return (
    <ul className={styles["chat-list"]}>
      {chats.map((chat) => {
        const isActive = chat.id == activeChatID;
        return (
          <li
            key={chat.id}
          >
            <button
              disabled={isActive}
              onClick={() => {setActiveChatID(chat.id)}}
            >
              {chat.name || "Unnamed Chat"}
            </button>
          </li>
        )
      })}
    </ul>
  );

}

export default ChatList;
