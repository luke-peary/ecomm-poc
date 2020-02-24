import styled, { css } from "styled-components";

import { typography, color } from "@material-ui/system";

const Text = styled.span`
  ${color}
  ${typography}
  ${props => {
    switch (props.variant) {
      case "small":
        return css`
          font-size: 1.5rem;
          line-height: 2rem;
        `;
      case "medium":
        return css`
          font-size: 1.7rem;
          line-height: 2.4rem;
        `;
      case "large":
        return css`
          font-size: 1.9rem;
          line-height: 2.8rem;
        `;
      default:
        return css`
          font-size: 1.7rem;
          line-height: 2.4rem;
        `;
    }
  }};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
  font-family: "lato";
`;

export default Text;
