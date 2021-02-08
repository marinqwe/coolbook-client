import { useEffect, useState } from 'react';
import { UserApi } from '../api';
import { useChat } from './useChat';

const userApiUrl = `/api/user`;
const userApi = new UserApi(userApiUrl);

export function useUser() {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const useChatValues = useChat(user);

  useEffect(() => {
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

  return {
    user,
    setUser,
    loadingUser,
    userApi,
    ...useChatValues,
  };
}
