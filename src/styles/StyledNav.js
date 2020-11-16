import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw;
  background-color: ${(props) => props.theme.black};
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: large;
  color: ${(props) => props.theme.lightgrey};
  &.${(props) => props.activeClassName} {
    color: ${(props) => props.theme.lightblue};
  }
  &:hover {
    color: ${(props) => props.theme.lightblue};
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
