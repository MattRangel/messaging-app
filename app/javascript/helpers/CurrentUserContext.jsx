import { createContext, useState, useEffect } from 'react';
import { getCurrentUser } from "@/helpers/messagingAPI";

const CurrentUserContext = createContext(undefined);

function CurrentUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(undefined)

  const updateCurrentUser = () => {
    getCurrentUser().then(setCurrentUser);
  }
  useEffect(updateCurrentUser, []);

  return (
    <CurrentUserContext value={{currentUser}}>
      {children}
    </CurrentUserContext>
  );
}


export { CurrentUserProvider, CurrentUserContext };
