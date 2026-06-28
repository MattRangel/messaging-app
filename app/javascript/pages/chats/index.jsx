import { useState, useRef } from "react";
import ChatList from "@/components/ChatList";
import Chat from "@/components/Chat";
import NewChatDialog from "@/components/NewChatDialog";
import styles from "./style.module.css";

function Chats() {
  const dialog = useRef();

  const showDialog = () => {
    dialog.current.showModal();
  }

  return (
    <div className={styles.area}>
      <NewChatDialog dialogRef={dialog}/>
      <ChatList
        newChatOnClick={showDialog}
      />
      <Chat />
    </div>
  );
}

export default Chats;
