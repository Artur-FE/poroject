import styled from "@emotion/styled";

interface MainButtonStyledProps {
  danger?: boolean;
}

export const MainButton = styled.button<MainButtonStyledProps>`
  width: 100%;
  height: fit-content;
  padding: 20px;
  background: ${({ danger }) =>
    danger ? "rgb(176, 44, 11)" : "rgb(17, 48, 127)"};
  border: none;
  border-radius: 6px;
  font-size: 26px;
  color: white;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  &:hover {
    background-color: lightblue;
  }

  &:disabled {
    background-color: rgb(202, 200, 200);
  }
`;
