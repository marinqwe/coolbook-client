import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3vh;
  border-radius: 5px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: calc(8px + 2vmin);
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.black};
  &.${(props) => props.activeClassName} {
    color: ${(props) => props.theme.blue};
  }
  &:hover {
    color: ${(props) => props.theme.blue};
  }
`;

export const StyledUser = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  span {
    display: flex;
    align-self: center;
  }
`;
