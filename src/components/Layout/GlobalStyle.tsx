import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }


  #root, html, body {
    height: 100%;
  }
  
  html {
    padding: 0;
    margin: 0;
  }

  body {
    padding: 2rem 0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    background: rgb(116,9,121);
    background: linear-gradient(120deg, rgba(116,9,121,0.8) 0%, rgba(0,104,255,0.8) 100%);
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export default GlobalStyle;
