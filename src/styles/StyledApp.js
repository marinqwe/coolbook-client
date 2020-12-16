import React, { useContext } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { AuthedNavBar, UnauthedNavBar } from '../components/NavBar';
import { UserContext } from '../context/user-context';

const theme = {
  red: '#FF0000',
  black: '#393939',
  orange: '#d1c143',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  green: '#009933',
  blue: '#2b5394',
  lightblue: '#6298f0',
  maxWidth: '1900px',
  paperWhite: '#fdf5e8',
  grey: '#6e6e6e',
};

const StyledPage = styled.div`
  background-color: ${(props) => props.theme.paperWhite};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 3vw;
  font-size: calc(6px + 2vmin);
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding: 1vh 0;
`;

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
}
`;

function StyledApp({ children }) {
  const { user } = useContext(UserContext);

  return (
    <ThemeProvider theme={theme}>
      {user ? <AuthedNavBar /> : <UnauthedNavBar />}
      <StyledPage>
        <GlobalStyle />
        <Inner>{children}</Inner>
      </StyledPage>
    </ThemeProvider>
  );
}

export default StyledApp;
