import { useState } from "react";
import ChatList from "@/components/ChatList";
import Chat from "@/components/Chat";
import styles from "./style.module.css";

function Home() {
  const [activeChatID, setActiveChatID] = useState(undefined);

  return (
    <div className={styles.area}>
      <ChatList activeChatID={activeChatID} setActiveChatID={setActiveChatID}/>
      <Chat chatID={activeChatID}/>
    </div>
  );
}

export default Home;
