import React from "react";
import styled from "styled-components";
import { StyledButton } from "./Button.styles";
import withLink from "../HOCs/withLink";

const StyledControl = styled.div`
  text-align: ${props => props.alignment};
  margin-top: ${props => (props.hasTopSpace ? "2.4rem" : 0)};
`;

export const ButtonControl = ({ alignment, hasTopSpace, children }) => {
  return (
    <StyledControl alignment={alignment} hasTopSpace={hasTopSpace}>
      {children}
    </StyledControl>
  );
};

const Button = props => {
  return <StyledButton {...props} />;
};

export default withLink(Button);
