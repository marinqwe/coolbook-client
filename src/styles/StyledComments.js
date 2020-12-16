import styled from 'styled-components';

export const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledComment = styled.div`
  background: ${(props) => props.theme.lightgrey};
  padding: 1%;
  margin: 1% auto;
  width: 90%;
  font-size: calc(8px + 2vmin);
`;

export const StyledCommentHeader = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.paperWhite};
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    span {
      margin-right: 5px;
    }
  }
`;

export const StyledCommentBody = styled.div`
  font-size: calc(8px + 1vmin);
  padding-top: 1%;
`;

export const StyledDate = styled.span`
  font-size: calc(5px + 1vmin);
  display: flex;
  align-self: baseline;
  color: ${(props) => props.theme.grey};
`;

export const StyledRemove = styled.span`
  font-size: calc(5px + 1vmin);
  color: ${(props) => props.theme.red};
  cursor: pointer;
`;
