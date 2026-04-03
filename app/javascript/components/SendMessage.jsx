import { sendMessageToChat } from "@/helpers/messagingAPI";

function SendMessage({chatID, onSent = () => {}}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.children.text.value;
    sendMessageToChat({chat_id: chatID, text}).then(onSent);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text"/>
      <button type="submit" disabled={isNaN(chatID)}>Send</button>
    </form>
  );
}

export default SendMessage;
