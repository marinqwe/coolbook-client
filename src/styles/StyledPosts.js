import styled from 'styled-components';

export const StyledPostContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: calc(9px + 1vmin);
  padding: 10px;
  div {
    cursor: pointer;
    &:hover {
      color: ${(props) => props.theme.blue};
    }
  }
`;

export const StyledPostTitle = styled.p`
  font-size: calc(18px + 1vmin);
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
  margin-bottom: 10px;
`;
