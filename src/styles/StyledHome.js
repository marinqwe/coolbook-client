import styled from 'styled-components';

export const StyledHome = styled.div`
  display: grid;

  @media screen and (min-width: 769px) {
    grid-template-columns: 2fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-rows: 1fr 0.5fr;
  }
`;
