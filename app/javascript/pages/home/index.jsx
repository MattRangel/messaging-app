import { useState } from "react";
import ChatList from "@/components/ChatList";
import Chat from "@/components/Chat";

function Home() {
  const [activeChatID, setActiveChatID] = useState(undefined);

  return (
    <>
      <ChatList activeChatID={activeChatID} setActiveChatID={setActiveChatID}/>
      <Chat chatID={activeChatID}/>
    </>
  );
}

export default Home;
