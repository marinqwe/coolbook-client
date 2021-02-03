import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2vh;
  border-radius: 5px;
  nav {
    overflow: hidden;
  }
`;

export const StyledNavLeft = styled.div`
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.menuOpen ? `flex` : `none`)};
    flex-direction: column;
    position: absolute;
    background-color: ${(props) => props.theme.paperWhite}; 
  }
`;

export const StyledToggleMenu = styled.span`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    align-self: center;
    align-items: flex-start;
    font-size: calc(8px + 2vmin);
    cursor: pointer;
    padding: 10px;
  }
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
    padding: 0 5px;
  }
`;
