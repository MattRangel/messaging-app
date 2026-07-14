import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router";
import { getChatsList } from "@/helpers/messagingAPI";
import styles from "./ChatList.module.css";

function ChatList({ newChatOnClick }) {
  const [chats, setChats] = useState([]);
  const [menuHidden, setMenuHidden] = useState(true);
  const { chatID: currentChatID } = useParams();

  const menu = useRef();
  const menuHiddenClass = menuHidden ? styles["portrait-hidden"] : "";
  const toggleMenuHidden = () => {
    setMenuHidden(menuHidden => !menuHidden);
  }

  const updateChats = () => {
    getChatsList().then(setChats);
  }
  useEffect(() => updateChats(), []);
  useEffect(() => setMenuHidden(true), [currentChatID]);

  return (
    <>
      <button onClick={toggleMenuHidden} className={styles["toggle-menu"]}>
        {menuHidden ? "⏷" : "⏶"}
      </button>
      <div ref={menu} className={`${styles.menu} ${menuHiddenClass}`}>
        <button
          className={styles["new-chat"]}
          onClick={newChatOnClick}
        >
          New Chat
        </button>
        <ul className={styles["chat-list"]}>
          {chats.map((chat) => {
            const isActive = chat.id == currentChatID;
            return (
              <li key={chat.id}>
                <Link className={isActive ? styles.active : ""}
                  to={`/chats/${chat.id}`}
                >
                  {chat.name || "Unnamed Chat"}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );

}

export default ChatList;
