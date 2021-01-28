import React, { useContext } from 'react';
import { useChat } from '../hooks/useChat';

// ChatProvider currently not used

const ChatContext = React.createContext(null);
export const useChatCtx = () => useContext(ChatContext);

export function ChatProvider({ children }) {
  const { messages, sendMessage } = useChat();
  const values = {
    messages,
    sendMessage,
  };
  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
}
