import { useState, useEffect } from "react";
import { getCurrentUser } from "@/helpers/messagingAPI";
import { CurrentUserContext } from "@/helpers/context";
import LoginWith from "@/components/auth/LoginWith";
import ChatList from "@/components/ChatList";
import Chat from "@/components/Chat";

function Home() {
  const [activeChatID, setActiveChatID] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  const updateCurrentUser = () => {
    getCurrentUser().then(setCurrentUser);
  }
  useEffect(updateCurrentUser, []);

  return (
    <>
      <h1>Welcome to Chat App</h1>
      {
        currentUser != null ? (
          <CurrentUserContext value={currentUser}>
            <ChatList activeChatID={activeChatID} setActiveChatID={setActiveChatID}/>
            <Chat chatID={activeChatID}/>
          </CurrentUserContext>
        ) : (
          <LoginWith strategy="github" name="GitHub"/>
        )
      }
    </>
  );
}

export default Home;
