import LoginWith from "@/components/auth/LoginWith";
import ChatList from "@/components/ChatList";

function Home() {
  return (
    <>
      <h1>Welcome to Chat App</h1>
      <LoginWith strategy="github" name="GitHub"/>
      <ChatList />
    </>
  );
}

export default Home;
