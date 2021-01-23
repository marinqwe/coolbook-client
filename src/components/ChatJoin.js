import React, { useState } from 'react';
import Chat from './Chat';
import { useUserCtx } from '../providers';
import { rooms } from '../helpers/chatRooms';
import { StyledChatJoin, OpenChat, Room, StyledChatInfo } from '../styles';

function ChatRoomList() {
  const { setMessages, onRoomLeave, onRoomJoin } = useUserCtx();
  const [chatOpen, setChatOpen] = useState(false);
  const [chatRoom, setChatRoom] = useState('');

  const onChatExit = () => {
    onRoomLeave();
    setMessages([]);
    setChatOpen(false);
  };

  const onChatOpen = (room) => {
    onRoomJoin(room);
    setChatRoom(room);
    setChatOpen(true);
  };

  return (
    <StyledChatJoin>
      <StyledChatInfo>
        <OpenChat>Chats</OpenChat>
        {rooms.map((room) => (
          <Room key={room} onClick={() => onChatOpen(room)}>
            {room}
          </Room>
        ))}
      </StyledChatInfo>

      {chatOpen && (
        <Chat chatOpen={chatOpen} onChatExit={onChatExit} chatRoom={chatRoom} />
      )}
    </StyledChatJoin>
  );
}

export default ChatRoomList;
