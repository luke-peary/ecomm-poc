import React from "react";
import { StyledButton } from "./Button.styles";
import withLink from "../HOCs/withLink";

const Button = props => {
  return <StyledButton {...props} />;
};

export default withLink(Button);
