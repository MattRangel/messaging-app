import styles from "./Message.module.css";

function Message({text, user, time}) {
  return (
    <>
      <h4 className={styles.username}>{user.name}</h4>
      <h5 className={styles.datetime}>{time}</h5>
      <p>{text}</p>
    </>
  )
}

export default Message;
