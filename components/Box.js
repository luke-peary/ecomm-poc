import styled from "styled-components";
import {
  palette,
  spacing,
  typography,
  shadows,
  borders
} from "@material-ui/system";

const Box = styled.div`
  overflow: hidden;
  ${palette}
  ${spacing}
  ${typography}
  ${shadows}
  ${borders}
`;

export default Box;
