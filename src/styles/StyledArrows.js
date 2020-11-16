import styled from "styled-components";

export const UpArrow = styled.span`
  &:hover {
    color: ${(props) => props.theme.lightblue};
  }
  cursor: pointer;
  ${(props) => props.liked && { color: props.theme.lightblue }}
`;

export const DownArrow = styled.span`
  cursor: pointer;
  ${(props) => props.disliked && { color: props.theme.red }}
  &:hover {
    color: ${(props) => props.theme.red};
  }
`;

export const ArrowGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
`;
