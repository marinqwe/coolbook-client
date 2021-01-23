import React, { useContext } from 'react';
import { useUser } from '../hooks/useUser';

const UserContext = React.createContext(null);
export const useUserCtx = () => useContext(UserContext);

export function UserProvider({ children }) {
  const {
    user,
    setUser,
    loadingUser,
    userApi,
    messages,
    sendMessage,
    usersOnline,
    setMessages,
    onRoomJoin,
    onRoomLeave
  } = useUser();
  const context = {
    user,
    setUser,
    loadingUser,
    userApi,
    messages,
    sendMessage,
    usersOnline,
    setMessages,
    onRoomJoin,
    onRoomLeave
  };
  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
}
