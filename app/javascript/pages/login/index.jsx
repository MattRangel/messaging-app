import styles from "./styles.module.css";
import LoginWith from "@/components/auth/LoginWith";

function Login() {
  return (
    <div className={styles.content}>
      <h1>Login<span> or </span>Create Account</h1>
      <LoginWith strategy="github" name="GitHub"/>
    </div>
  )
};

export default Login;
