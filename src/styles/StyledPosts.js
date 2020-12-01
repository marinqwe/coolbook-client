import styled from "styled-components";

export const StyledPostContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5%;
`;

export const StyledPostTitle = styled.p`
  font-size: calc(14px + 2vmin);
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
