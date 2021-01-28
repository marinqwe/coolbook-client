import React, { useContext } from 'react';
import { useUser } from '../hooks/useUser';

const UserContext = React.createContext(null);
export const useUserCtx = () => useContext(UserContext);

export function UserProvider({ children }) {
  const useUserValues = useUser();

  return (
    <UserContext.Provider value={useUserValues}>
      {children}
    </UserContext.Provider>
  );
}
