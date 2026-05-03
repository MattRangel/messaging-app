import styles from "./Message.module.css";

function Message({text, user, time}) {
  return (
    <>
      <h4>From {user.name} @ {time}</h4>
      <p>{text}</p>
    </>
  )
}

export default Message;
