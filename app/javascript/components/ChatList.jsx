import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { getChatsList } from "@/helpers/messagingAPI";
import styles from "./ChatList.module.css";

function ChatList({ newChatOnClick }) {
  const [chats, setChats] = useState([]);
  const { chatID: currentChatID } = useParams();

  const updateChats = () => {
    getChatsList().then(setChats);
  }
  useEffect(() => updateChats(), []);

  return (
    <ul className={styles["chat-list"]}>
      <li>
        <button
          className={styles["new-chat"]}
          onClick={newChatOnClick}
        >
          New Chat
        </button>
      </li>
      {chats.map((chat) => {
        const isActive = chat.id == currentChatID;
        return (
          <li key={chat.id}>
            <Link
              to={`/chats/${chat.id}`}
            >
              {chat.name || "Unnamed Chat"}
            </Link>
          </li>
        )
      })}
    </ul>
  );

}

export default ChatList;
