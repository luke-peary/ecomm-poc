import styled, { css } from "styled-components";

const PrimaryStyles = css`
  color: white;
  background-color: ${({ theme }) => theme.palette.primary["600"]};
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary["500"]};
  }
`;

const SecondaryStyles = css`
  color: black;
  background-color: ${({ theme }) => theme.palette.neutral["100"]};
  &:hover {
    background-color: ${({ theme }) => theme.palette.neutral["200"]};
  }
`;

export const StyledButton = styled.button`
  display: inline-block;
  font-size: 17px;
  padding: 0 16px;
  line-height: 48px;
  font-weight: bold;
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm};
  text-decoration: none;
  ${props => props.variant === "primary" && PrimaryStyles}
  ${props => props.variant === "secondary" && SecondaryStyles}
`;
