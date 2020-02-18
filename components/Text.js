import styled, { css } from "styled-components";

import { typography, color } from "@material-ui/system";

const Text = styled.span`
  ${color}
  ${typography}
  ${props => {
    switch (props.variant) {
      case "small":
        return css`
          font-size: 15px;
          line-height: 20px;
        `;
      case "medium":
        return css`
          font-size: 17px;
          line-height: 24px;
        `;
      case "large":
        return css`
          font-size: 19px;
          line-height: 28px;
        `;
      default:
        return css`
          font-size: 15px;
          line-height: 20px;
        `;
    }
  }};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  font-family: "lato";
`;

export default Text;
