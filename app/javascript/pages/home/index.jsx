import LoginWith from "@/components/auth/LoginWith";

function Home() {
  return (
    <>
      <h1>Welcome to Chat App</h1>
      <LoginWith strategy="github" name="GitHub"/>
    </>
  );
}

export default Home;
