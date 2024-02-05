import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Raleway", sans-serif;
  }

  body, h1, p {
    margin: 0;
    padding: 0;
  }
`;
export default GlobalStyle;
