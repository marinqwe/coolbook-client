import React from 'react';
import { rooms } from '../helpers/chatRooms';
import {
  StyledChatJoin,
  OpenChat,
  StyledChatInfo,
  StyledLink,
} from '../styles';

function ChatRoomList() {
  return (
    <StyledChatJoin>
      <StyledChatInfo>
        <OpenChat>Chats</OpenChat>
        {rooms.map((room) => (
          <StyledLink to={`/chat/${room}`} key={room}>
            ➡{room}
          </StyledLink>
        ))}
      </StyledChatInfo>
    </StyledChatJoin>
  );
}

export default ChatRoomList;
