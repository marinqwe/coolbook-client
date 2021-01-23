import React, { useRef, useCallback } from 'react';
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
} from '../styles';

function Chat({ onChatExit, chatRoom }) {
  const { user, messages, sendMessage } = useUserCtx();
  const inputRef = useRef(null);

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
      room: chatRoom,
    });
  };

  return (
    <StyledChat>
      <header>
        <h3>Chat about {chatRoom}</h3>
        <span onClick={() => onChatExit()}>&times;</span>
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
  );
}

export default Chat;
