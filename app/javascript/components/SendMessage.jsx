import { sendMessageToChat } from "@/helpers/messagingAPI";
import styles from "./SendMessage.module.css";

function SendMessage({chatID, onSent = () => {}}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.children.text.value;
    sendMessageToChat({chat_id: chatID, text}).then(onSent);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} className={styles["message-form"]}>
      <input type="text" name="text"/>
      <button type="submit" disabled={isNaN(chatID)}>Send</button>
    </form>
  );
}

export default SendMessage;
