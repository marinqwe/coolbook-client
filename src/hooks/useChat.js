import { useEffect, useState, useRef } from 'react';
import { formatChatMsg } from '../helpers/formatChatMsg';
import socketIOClient from 'socket.io-client';

export function useChat(user) {
  const [messages, setMessages] = useState([]);
  const [roomUsers, setRoomUsers] = useState([]);
  //const [usersOnline, setUsersOnline] = useState(new Map());
  const socketRef = useRef(null);

  useEffect(() => {
    if (user) {
      socketRef.current = socketIOClient('http://localhost:8000', {
        query: `user=${user.name}&id=${user.id}`,
      });

      //listen for other users' messages
      socketRef.current.on('newMessage', (message) => {
        setMessages((messages) => [...messages, message]);
      });

      socketRef.current.on('roomUsers', ({ users }) => {
        setRoomUsers([...users]);
      });

      //listen for private messages
      // socketRef.current.on('privateChatMsg', (message) => {
      //   setMessages((messages) => [...messages, message]);
      //   console.log(message);
      // });

      // socketRef.current.on('usersOnline', (users) => {
      //   let usersMap = new Map(JSON.parse(users));
      //   const userId = user.id.toString();
      //   if (usersMap.has(userId)) {
      //     // don't show me with online users
      //     usersMap.delete(userId);
      //   }
      //   setUsersOnline(usersMap);
      // });
    }
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        socketRef.current.off();
      }
    };
  }, [user, socketRef]);

  const onRoomJoin = (room) => {
    socketRef.current.emit('joinRoom', { room });
  };

  const onRoomLeave = () => {
    socketRef.current.emit('leaveRoom');
  };

  const sendMessage = (msg) => {
    const message = formatChatMsg(msg);
    socketRef.current.emit('message', message);
  };

  // const sendPrivateMessage = (msg) => {
  //   const message = formatChatMsg(msg);
  //   socketRef.current.emit('privateChatMsg', message);
  //   setMessages((messages) => [...messages, message]);
  // };

  return {
    messages,
    sendMessage,
    //usersOnline,
    setMessages,
    onRoomJoin,
    onRoomLeave,
    roomUsers,
  };
}
