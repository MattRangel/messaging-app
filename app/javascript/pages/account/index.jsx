import { useState } from "react";
import { useLoaderData } from "react-router";
import { updateUser } from "@/helpers/messagingAPI";

function Account() {
  const { currentUser } = useLoaderData();
  const [ name, setName ] = useState(currentUser.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameInput = e.target.screenName.value;
    updateUser({name: nameInput}).then(() => setName(nameInput));
  }

  return (
    <>
      <h1>Manage your account</h1>
      <p><b>User ID:</b> {currentUser.id}</p>
      <p><b>Email:</b> {currentUser.email}</p>
      <p><b>Screen Name:</b> {name}</p>
      <br/>
      <form action="" onSubmit={handleSubmit}>
        <label>
          Update Screen Name:{" "}
          <input type="text" name="screenName" defaultValue={currentUser.name}/>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}

export default Account;
