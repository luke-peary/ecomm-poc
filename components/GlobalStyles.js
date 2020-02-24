import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  body,
  dl, dt, dd,
  ul, ol, li,
  h1, h2, h3, h4, h5, h6,
  pre,
  form, fieldset,
  p, blockquote,
  figure, figcaption,
  table, th, td {
    margin: 0; 
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }
`;
