import styled from 'styled-components';

export const StyledChatWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr;
`;

export const StyledChat = styled.div`
  background-color: ${(props) => props.theme.lightgrey};
  height: 85vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: 10% 1fr 15%;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 15px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
    h3 {
      align-self: center;
      font-size: calc(8px + 2vmin);
      @media screen and (max-width: 768px) {
        padding-left: 10px;
      }
    }
    span {
      cursor: pointer;
      &:hover {
        color: ${(props) => props.theme.lightblue};
      }
      font-size: calc(12px + 2vmin);
      padding-right: 20px;
      @media screen and (max-width: 768px) {
        padding-right: 30px;
      }
    }
  }
  ul {
    height: 100%;
    background-color: ${(props) => props.theme.offWhite};
    margin: 0 15px;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: calc(6px + 2vmin);
    font-weight: 900;
    form {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

export const StyledChatUsers = styled.div`
  h3 {
    font-size: calc(10px + 2vmin);
    margin: 0 0 5px 15px;
  }
  ul {
    height: 100%;
    background-color: ${(props) => props.theme.paperWhite};
    margin: 0 15px;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    li {
      font-size: calc(10px + 1vmin);
      color: ${(props) => props.theme.grey};
      cursor: pointer;
      &:hover {
        color: ${(props) => props.theme.blue};
      }
    }
  }
`;

export const StyledChatJoin = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const StyledChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const OpenChat = styled.div`
  cursor: pointer;
  font-size: calc(6px + 2vmin);
  text-decoration: underline;
  &:hover {
    color: ${(props) => props.theme.grey};
  }
`;

export const StyledMessage = styled.li`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.me
      ? `
  flex-start;
  `
      : `
  flex-end;
  `};
  margin: 10px;
`;

export const StyledMessageHead = styled.p`
  margin: 0;
  font-size: calc(4px + 1vmin);
  color: ${(props) => props.theme.grey};
`;

export const StyledMessageText = styled.span`
  min-width: 0;
  padding: 5px;
  margin: 0;
  font-size: calc(10px + 1vmin);
  background-color: ${(props) => props.theme.lightgrey};
  border-radius: 5px;
  max-width: 50%;
  overflow-wrap: break-word;
  ${(props) =>
    props.me &&
    `color: ${props.theme.offWhite}; background-color: ${props.theme.lightblue};`};
  ${(props) =>
    props.bot &&
    `color: ${props.theme.offWhite}; background-color: ${props.theme.grey};`};
`;
