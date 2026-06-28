import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createChat } from "@/helpers/messagingAPI";
import styles from "./NewChatDialog.module.css";

function NewChatDialog({dialogRef, onCreate = () => {}}) {
  const [userIDs, setUserIDs] = useState([]);
  const [userIDInput, setUserIDInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.chatName.value;
    createChat({name, user_ids: userIDs})
      .then(response => {
        if (response != null) {
          navigate(`/chats/${response.id}`);
          closeDialog();
        }
      });
  }

  const closeDialog = () => {
    dialogRef.current.close();
    setUserIDs([]);
  }

  const addID = () => {
    if (!userIDs.includes(userIDInput)) {
      setUserIDs(userIDs => [...userIDs, userIDInput]);
    }
    setUserIDInput("");
  }
  const removeID = (index) => {
    setUserIDs(userIDs => userIDs.toSpliced(index, 1));
  }
  const handleUserIDInputChange = (e) => {
    e.preventDefault();
    setUserIDInput(e.target.valueAsNumber);
  }

  const handleUserIDInputEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addID();
    }
  }

  return (
    <dialog ref={dialogRef}>
      <button onClick={closeDialog} className={styles.close}>
        Close
      </button>
      <h1>Create a Chat!</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Chat Name:{" "}
          <input type="text" name="chatName"/>
        </label>
        <label>
          Add User ID:{" "}
          <input
            type="number"
            value={userIDInput}
            onChange={handleUserIDInputChange}
            onKeyPress={handleUserIDInputEnter}
          />
          <button
            type="button"
            onClick={addID}
            className={styles.add}
            disabled={isNaN(userIDInput)}
          >
            Add
          </button>
        </label>
        { (userIDs.length > 0) && <h2>Users</h2>}
        <ul className={styles.users}>
          {userIDs.map((id, index) => (
            <UserItem
              id={id}
              key={id}
              onRemove={() => {removeID(index)}}
            />
          ))}
        </ul>
        <button type="submit">Create Chat</button>
      </form>
    </dialog>
  )
}

function UserItem({id, onRemove}) {
  return (
    <li>
      ID:{` ${id}`}
      <button type="button" onClick={onRemove} className={styles.remove}>Remove</button>
    </li>
  );
}

export default NewChatDialog;
