import styled from 'styled-components';

export const StyledPostContent = styled.div`
  font-size: calc(9px + 1vmin);
  width: 90%;
  div {
    margin: 10px;
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.blue};
    }
  }
`;

export const StyledPostTitle = styled.p`
  font-size: calc(22px + 1vmin);
  font-weight: bold;
  margin: 0;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.blue};
  }
`;

export const StyledPostPreview = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: ${(props) => props.theme.lightgrey};
  border: 1px solid white;
  border-radius: 5px;
  width: 90%;
  max-width: 700px;
`;

export const StyledConfirmDelete = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 5%;
`;

export const StyledPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 10px;
`;
