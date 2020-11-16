import { useEffect, useState } from "react";
import { UserApi } from "./api";
const userApi = new UserApi();

export function useUser() {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);

  useEffect(() => {
    setLoadingUser(true);
    const fetchUser = async () => {
      try {
        const { data } = await userApi.getUser();
        setUser(data);
        setLoadingUser(false);
      } catch {
        setLoadingUser(false);
      }
    };
    fetchUser();
  }, []);

  return { user, setUser, loadingUser };
}
