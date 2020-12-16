import React from 'react';
import { useUser } from '../user';
import { UserApi } from '../api';

export const UserContext = React.createContext(null);

export function UserProvider({ children }) {
  const { user, setUser, loadingUser } = useUser();
  const contexts = {
    user,
    setUser,
    loadingUser,
    userApi: new UserApi(),
  };
  return (
    <UserContext.Provider value={contexts}>{children}</UserContext.Provider>
  );
}
