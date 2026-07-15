import styles from "./style.module.css";
import { useLoaderData, Link } from "react-router";

function Home() {
  const { currentUser } = useLoaderData();

  return (
    <div className={styles.home}>
      <h1>Welcome back, {currentUser.name}!</h1>
      <Link to="/chats">Go to chats →</Link>
    </div>
  )
}

export default Home;
