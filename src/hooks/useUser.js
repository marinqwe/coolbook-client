import { useEffect, useState } from 'react';
import { UserApi } from '../api';
import { useChat } from './useChat';

const userApi = new UserApi();

export function useUser() {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(false);
  const { usersOnline, messages, sendMessage, setMessages, onRoomJoin, onRoomLeave } = useChat(user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoadingUser(true);
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
    messages,
    sendMessage,
    usersOnline,
    setMessages,
    onRoomJoin,
    onRoomLeave,
  };
}
