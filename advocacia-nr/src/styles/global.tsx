import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #EBEBEB;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Segoe UI, sans-serif;
  }

  #root {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 20px 40px 20px;
  }

  button {
    cursor: pointer;

  }
`;
