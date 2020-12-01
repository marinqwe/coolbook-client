import styled from "styled-components";

export const BlueButton = styled.button`
  width: 15%;
  padding: 5px 5px;
  margin: 10px;
  cursor: pointer;
  color: white;
  background-color: ${(props) => props.theme.blue};
  border: 0px;
  border-radius: 3px;
  appearance: none;
  font-size: calc(8px + 2vmin);
  min-width: 100px;
  &[disabled] {
    opacity: 0.5;
  }
`;

export const DarkButton = styled(BlueButton)`
  background-color: ${(props) => props.theme.black};
`;

export const OrangeButton = styled(BlueButton)`
  background-color: ${(props) => props.theme.orange};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-start;
`;
