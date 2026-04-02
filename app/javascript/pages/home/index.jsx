import { useState } from "react";
import LoginWith from "@/components/auth/LoginWith";
import ChatList from "@/components/ChatList";
import Chat from "@/components/Chat";

function Home() {
  const [activeChatID, setActiveChatID] = useState(undefined);

  return (
    <>
      <h1>Welcome to Chat App</h1>
      <LoginWith strategy="github" name="GitHub"/>
      <ChatList activeChatID={activeChatID} setActiveChatID={setActiveChatID}/>
      <Chat chatID={activeChatID}/>
    </>
  );
}

export default Home;
