import styled from 'styled-components';

export const StyledHome = styled.div`
  display: grid;

  @media screen and (min-width: 600px) {
    grid-template-columns: 2fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-rows: 1fr 1fr;
  }
`;
