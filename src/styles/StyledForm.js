import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const StyledChatSend = styled(Form)`
width: 80%;
display: flex;
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin: 10px;
  font-size: large;
  width: 60%;
  min-width: 220px;
  border: none;
  border-bottom: 1px solid grey;
  border-radius: 2px;
  @media screen and (max-width: 540px){
    min-width: 150px;
    font-size: small;
  }
`;

export const StyledContent = styled.textarea`
  padding: 10px;
  margin: 10px;
  font-size: large;
  width: 60%;
  min-width: 220px;
  border: none;
  border-bottom: 1px solid grey;
  border-radius: 2px;
`;

export const StyledSearch = styled.form`
  width: 100%;
  display: flex;
  label {
    width: 100%;
    display: flex;
    align-items: center;
    input {
      width: 100%;
      margin: 10px 0;
    }
  }
`;

export const StyledNote = styled.span`
  color: ${(props) => props.theme.grey};
  font-size: calc(6px + 1vmin);
  padding: 0 0 0 10px;
  margin: 10px 0 0 10px;
  width: 60%;
  min-width: 220px;
`;
