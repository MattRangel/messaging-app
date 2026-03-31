import { useState } from "react";
import LoginWith from "@/components/auth/LoginWith";
import ChatList from "@/components/ChatList";

function Home() {
  const [activeChatID, setActiveChatID] = useState(undefined);

  return (
    <>
      <h1>Welcome to Chat App</h1>
      <LoginWith strategy="github" name="GitHub"/>
      <ChatList activeChatID={activeChatID} setActiveChatID={setActiveChatID}/>
    </>
  );
}

export default Home;
