import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  animation: ${rotate360} 0.5s linear infinite;
  transform: translateZ(0);

  border-bottom: 4px solid grey;
  background: transparent;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20%;
`;