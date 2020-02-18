import styled, { css } from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { typography, color } from "@material-ui/system";

const Heading = styled.span`
  ${typography}
  ${color}
  ${props => {
    switch (props.variant) {
      case "h1":
        return css`
          font-size: 40px;
          line-height: 40px;
          ${breakpoint("md")`
            font-size: 72px;
            line-height: 72px;
          `}
        `;
      case "h2":
        return css`
          font-size: 27px;
          line-height: 32px;
          ${breakpoint("md")`
            font-size: 40px;
            line-height: 48px;
          `}
        `;
      case "h3":
        return css`
          font-size: 23px;
          line-height: 28px;
          ${breakpoint("md")`
            font-size: 30px;
            line-height: 36px;
          `}
        `;
      case "h4":
        return css`
          font-size: 21px;
          line-height: 28px;
          ${breakpoint("md")`
            font-size: 24px;
            line-height: 32px;
          `}
        `;
      default:
        return css`
          font-size: 21px;
          line-height: 28px;
          ${breakpoint("md")`
            font-size: 24px;
            line-height: 32px;
          `}
        `;
    }
  }};
  font-weight: 700;
  font-family: "khula";
`;

export default Heading;
