import React from "react";
import { useUser } from "../user";
import { LikesApi, PostApi, UserApi } from "../api";
const userApi = new UserApi();
const postApi = new PostApi();
const likesApi = new LikesApi();

export const UserContext = React.createContext(null);

export function UserProvider({ children }) {
  const { user, setUser, loadingUser } = useUser();
  return (
    <UserContext.Provider value={{ user, setUser, postApi, userApi, likesApi, loadingUser }}>
      {children}
    </UserContext.Provider>
  );
}
