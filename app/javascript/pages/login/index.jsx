import LoginWith from "@/components/auth/LoginWith";
function Login() {
  return (
    <>
      <h1>Login / Create Account</h1>
      <LoginWith strategy="github" name="GitHub"/>
    </>
  )
};

export default Login;
