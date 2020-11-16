import styled from 'styled-components';

export const StyledImage = styled.img`
  width: 20%;
  height: 20%;
  border: 2px solid ${props => props.theme.black};
  border-radius: 5%;
`;

export const StyledIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.lightblue};
  margin-right: 10px;
`;