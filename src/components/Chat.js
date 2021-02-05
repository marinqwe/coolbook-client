import React, { useRef, useCallback, useEffect } from 'react';
import { chatMsgSchema } from '../helpers/validationSchema';
import { useUserCtx } from '../providers';
import { Formik } from 'formik';
import {
  StyledChat,
  BlueButton,
  StyledInput,
  StyledError,
  StyledChatSend,
  StyledMessage,
  StyledMessageHead,
  StyledMessageText,
  StyledChatUsers,
  StyledChatWrapper,
} from '../styles';

function Chat({
  match: {
    params: { room },
  },
}) {
  const {
    user,
    messages,
    sendMessage,
    roomUsers,
    onRoomJoin,
    onRoomLeave,
  } = useUserCtx();

  const inputRef = useRef(null);

  useEffect(() => {
    onRoomJoin(room);
    return () => {
      onRoomLeave();
    };
  }, [room]);

  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  }, []);

  const handleSubmit = ({ message }) => {
    sendMessage({
      message,
      username: user.name,
      id: user.id,
      room,
    });
  };

  return (
    <StyledChatWrapper>
      <StyledChatUsers>
        <ul>
          {roomUsers.map((roomUser, i) => {
            return <li key={i}>{roomUser.user}</li>;
          })}
        </ul>
      </StyledChatUsers>
      <StyledChat>
        <header>
          <h3>Chat about {room}</h3>
          {/* <span onClick={() => onChatExit()}>&times;</span> */}
        </header>

        <ul>
          {messages.map((msg, i) => {
            let fromMe = user.id === msg.id;
            let isChatBot = msg.username === 'ChatBot';
            const lastMessage = messages.length - 1 === i;
            return (
              <StyledMessage
                ref={lastMessage ? setRef : null}
                key={i}
                me={fromMe}
              >
                <StyledMessageHead>
                  {fromMe ? 'You' : msg.username} - {msg.timestamp}
                </StyledMessageHead>
                <StyledMessageText me={fromMe} bot={isChatBot}>
                  {msg.message}
                </StyledMessageText>
              </StyledMessage>
            );
          })}
        </ul>

        <footer>
          <Formik
            initialValues={{
              message: '',
            }}
            validationSchema={chatMsgSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              handleSubmit(values);
              setSubmitting(false);
              resetForm();
              inputRef.current.focus();
            }}
          >
            {({
              isSubmitting,
              values,
              handleChange,
              handleSubmit,
              errors,
              touched,
            }) => (
              <>
                {errors.message && touched.message && (
                  <StyledError>{errors.message}</StyledError>
                )}
                <StyledChatSend onSubmit={handleSubmit}>
                  <StyledInput
                    type='textarea'
                    name='message'
                    ref={inputRef}
                    value={values.message}
                    onChange={handleChange}
                    placeholder='Leave a message...'
                  />

                  <BlueButton type='submit' disabled={isSubmitting}>
                    Send
                  </BlueButton>
                </StyledChatSend>
              </>
            )}
          </Formik>
        </footer>
      </StyledChat>
    </StyledChatWrapper>
  );
}

export default Chat;
